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
				MODELO         VARCHAR(100)      '$.MODELO',
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

END
GO

DECLARE @JSON VARCHAR(MAX)='{"MODELO":"USVGS_CURSO","METODO":"GETVARIABLE","PARAMETROS":{"IDVARIABLE":"IDDEPURARX"},"USUARIO":"OSOLANO"}'
EXEC DBO.SPQ_USVGS_CURSO @JSON
