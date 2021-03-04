--Creacion de la base de datos
--create database prueba2;

--creacion de las tablas
/*	CREATE TABLE logDial
(
	dLlamada varchar(10),
	fechaDeLlamada dateTime,
	tiempoDialogo smallint,
	telefono varchar(10),
	tipoDeLlamada varchar(15),
);--
	CREATE TABLE costos
(
	tipoDeLlamada varchar(15),
	costo decimal(10,4)
);
*/

--Creacion de las consultas de cada una de ellas

use prueba2;
-- 1-Que muestre los registros con tipo de llamada **Cel LD** durante el **mes febrero** **_(5 puntos)_**
declare @inicio date ='2020-01-31';
declare @fin date = '2020-03-01';
select * from [dbo].[logDial] where tipoDeLlamada = 'Cel LD' and fechaDeLlamada >@inicio and fechaDeLlamada < DATEADD(day, 1, @fin)

-- 2-Que indique el promedio de tiempo de dialogo de las llamadas con tipo **Cel LD** durante el **mes de febrero** **_(5 puntos)_**
declare @inicio date ='2020-01-31';
declare @fin date = '2020-03-01';
select AVG(tiempoDialogo) from [dbo].[logDial] where  tipoDeLlamada = 'Cel LD' and fechaDeLlamada >@inicio and fechaDeLlamada < DATEADD(day, 1, @fin)

-- 3-Que muestre el **número en minutos de dialogo** (tomando tiempoDialogo que está en segundos) y el **costo** de todas las llamadas del **mes de enero** **_(10 puntos)_**

declare @inicio date ='2020-01-01';
declare @fin date = '2020-02-01';


select (tiempoDialogo*60) AS Tiempo_minutos, 
Case 
when costos.tipoDeLlamada = 'Cel LD' then (tiempoDialogo*60)*.40
when costos.tipoDeLlamada = 'Cel' then (tiempoDialogo*60)*.12
when costos.tipoDeLlamada = 'LD nacional' then (tiempoDialogo*60)*.5
end AS Costo_de_llamadas, costos.tipoDeLlamada
from [dbo].[logDial] inner join costos On logDial.tipoDeLlamada = costos.tipoDeLlamada
where fechaDeLlamada >=@inicio and fechaDeLlamada < DATEADD(day, 1, @fin) 






