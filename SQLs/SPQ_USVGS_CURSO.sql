CREATE OR ALTER PROCEDURE DBO.SPQ_USVGS_CURSO @JSON VARCHAR(MAX)
	WITH ENCRYPTION
AS
-- Variables
DECLARE @PARAMETROS NVARCHAR(MAX)
	,@IDVARIABLE VARCHAR(40)
	,@METODO VARCHAR(100)
	,@USUARIO VARCHAR(20)
	,@GRUPO VARCHAR(8)
	,@SYS_COMPUTERNAME VARCHAR(254)
	,@SEDE VARCHAR(5)
	,@DATO VARCHAR(120)
	,@OBSERVACION VARCHAR(4096)
	,@DESCRIPCION VARCHAR(100)

BEGIN
	SET LANGUAGE Spanish;

	--DEFINICION DE TABLA DE ERRORES
	DECLARE @TBLERRORES TABLE(ERROR VARCHAR(200));

	---- TOMA DEL GRUPO, SYS_COMPUTERNAME, SEDE   DE ACUERDO AL USUARIO
	--SELECT @GRUPO = DBO.FNK_DESCIFRAR(GRUPO) FROM USUSU WHERE USUARIO = @USUARIO
	--SELECT @SYS_COMPUTERNAME = SYS_COMPUTERNAME FROM USUSU WHERE USUARIO = @USUARIO
	--SELECT @SEDE = IDSEDE FROM UBEQ WHERE SYS_ComputerName = @SYS_COMPUTERNAME


	SELECT *
	INTO   #JSON
	FROM OPENJSON (@json)
		WITH (
				METODO         VARCHAR(100)      '$.METODO',
				USUARIO        VARCHAR(20)       '$.USUARIO',
				PARAMETROS     NVARCHAR(MAX)  AS JSON
		)

	SELECT @METODO = METODO , @PARAMETROS = PARAMETROS, @USUARIO = USUARIO
	FROM #JSON

	IF @METODO = 'GETVARIABLE'
	BEGIN
		SELECT @IDVARIABLE = IDVARIABLE
		FROM OPENJSON (@PARAMETROS)
		WITH (IDVARIABLE VARCHAR(40) '$.IDVARIABLE')

		IF NOT EXISTS(SELECT * FROM USVGS WHERE IDVARIABLE = @IDVARIABLE)
			INSERT INTO @TBLERRORES(ERROR)
			SELECT 'VARIABLE NO EXISTE'

		IF (SELECT COUNT(*) FROM @TBLERRORES)> 0
        BEGIN
            SELECT 'KO' OK
            SELECT ERROR FROM @TBLERRORES
        END
        ELSE
		BEGIN
		   SELECT 'OK' OK
		   SELECT * FROM USVGS WHERE IDVARIABLE = @IDVARIABLE
	    END
	END

  IF @METODO = 'UPDATE'
  BEGIN
	  SELECT @IDVARIABLE = IDVARIABLE, @DATO = DATO, @OBSERVACION = OBSERVACION
	  FROM OPENJSON (@PARAMETROS)
	  WITH (
		  IDVARIABLE VARCHAR(40) '$.IDVARIABLE',
		  DATO VARCHAR(120) '$.DATO',
		  OBSERVACION VARCHAR(4096) '$.OBSERVACION'
	  )

    --SET @IDVARIABLE = ''
    --SET @DATO = ''

    IF COALESCE(@IDVARIABLE, '') = ''
    BEGIN
      INSERT INTO @TBLERRORES(ERROR)
			SELECT 'Identificador de la variable no debe estar vac??a o nula'
    END

    IF COALESCE(@DATO, '') = ''
    BEGIN
      INSERT INTO @TBLERRORES(ERROR)
			SELECT 'Valor de la variable no debe estar vac??o o nulo'
    END

	  BEGIN TRAN
		  BEGIN TRY
			  UPDATE USVGS SET DATO = @DATO, OBSERVACION = @OBSERVACION
			  WHERE IDVARIABLE = @IDVARIABLE
		  END TRY

		  BEGIN CATCH
			  INSERT INTO @TBLERRORES(ERROR)
			  SELECT ERROR_MESSAGE()
		  END CATCH

		  IF (SELECT COUNT(1) FROM @TBLERRORES)>0
		  BEGIN
			  SELECT 'KO' OK
			  SELECT * FROM @TBLERRORES
			  ROLLBACK
			  RETURN
		  END
		  ELSE
		  BEGIN
	      COMMIT
			  SELECT 'OK' OK
			  --SELECT * FROM USVGS WHERE IDVARIABLE = @IDVARIABLE
		  END


  END

  IF @METODO = 'INSERT'
  BEGIN
    SELECT @IDVARIABLE = IDVARIABLE
    , @DESCRIPCION = DESCRIPCION
    , @DATO = DATO
    , @OBSERVACION = OBSERVACION
	  FROM OPENJSON (@PARAMETROS)
	  WITH (
		  IDVARIABLE VARCHAR(20) '$.IDVARIABLE',
		  DATO VARCHAR(120) '$.DATO',
		  DESCRIPCION VARCHAR(100) '$.DESCRIPCION',
		  OBSERVACION VARCHAR(4096) '$.OBSERVACION'
	  )

    BEGIN TRAN
		  BEGIN TRY
        INSERT INTO USVGS(IDVARIABLE, DATO, DESCRIPCION, OBSERVACION, TP_VARIABLE)
        SELECT @IDVARIABLE, @DATO, @DESCRIPCION, @OBSERVACION, 'Alfanum??rica'
        WHERE NOT EXISTS(SELECT 1 FROM USVGS WHERE IDVARIABLE = @IDVARIABLE)
        AND COALESCE(@IDVARIABLE, '') <> ''
        AND COALESCE(@DESCRIPCION, '') <> ''

      END TRY
      BEGIN CATCH
			  INSERT INTO @TBLERRORES(ERROR)
			  SELECT ERROR_MESSAGE()
		  END CATCH

      IF COALESCE(@IDVARIABLE, '') = ''
      BEGIN
        INSERT INTO @TBLERRORES(ERROR)
			  SELECT 'Identificador de la variable no debe estar vac??a o nula'
      END

      IF COALESCE(@DESCRIPCION, '') = ''
      BEGIN
        INSERT INTO @TBLERRORES(ERROR)
			  SELECT 'Descripci??n de la variable no debe estar vac??a o nula'
      END

      IF (SELECT COUNT(1) FROM @TBLERRORES)>0
		  BEGIN
			  SELECT 'KO' OK
			  SELECT * FROM @TBLERRORES
			  ROLLBACK
			  RETURN
		  END
		  ELSE
		  BEGIN
	      COMMIT
			  SELECT 'OK' OK
			  --SELECT * FROM USVGS WHERE IDVARIABLE = @IDVARIABLE
		  END
  END

  IF @METODO = 'DELETE'
  BEGIN
    SELECT @IDVARIABLE = IDVARIABLE 
	  FROM OPENJSON (@PARAMETROS)
	  WITH (IDVARIABLE VARCHAR(20) '$.IDVARIABLE')

    INSERT INTO @TBLERRORES(ERROR)
	  SELECT 'VARIABLE ' + @IDVARIABLE + ' NO EXISTE'
    WHERE NOT EXISTS(SELECT IDVARIABLE FROM USVGS WHERE IDVARIABLE = @IDVARIABLE)

    BEGIN TRAN
      BEGIN TRY

        DELETE FROM USVGS WHERE IDVARIABLE = @IDVARIABLE

      END TRY
      BEGIN CATCH

        INSERT INTO @TBLERRORES(ERROR)
			  SELECT ERROR_MESSAGE()

      END CATCH

      IF (SELECT COUNT(1) FROM @TBLERRORES)>0
		  BEGIN
			  SELECT 'KO' AS OK
			  SELECT * FROM @TBLERRORES
			  ROLLBACK
			  RETURN
		  END
		  ELSE
		  BEGIN
	      COMMIT
			  SELECT 'OK' AS OK
		  END
      
  END
END
GO
RETURN
DECLARE @JSON VARCHAR(MAX)='{"MODELO":"USVGS_CURSO","METODO":"GETVARIABLE","PARAMETROS":{"IDVARIABLE":"IDDEPURARX"},"USUARIO":"OSOLANO"}'
EXEC DBO.SPQ_USVGS_CURSO @JSON

SELECT TOP 10 * FROM API_LOG ORDER BY ITEM DESC


SELECT * FROM USVGS WHERE IDVARIABLE = 'PRUEBA'

delete from usvgs where idvariable = 'PRUEBA'

