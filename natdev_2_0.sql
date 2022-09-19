-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-09-2022 a las 06:13:23
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `natdev 2.0`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_empleado` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `contraseña` varchar(400) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `correo_electronico` varchar(62) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `disponibilidad` int(5) NOT NULL,
  `image_url` varchar(2083) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `nombre`, `contraseña`, `correo_electronico`, `disponibilidad`, `image_url`) VALUES
(1, 'Carlos García', '', 'carlos@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(2, 'Eduardo Díaz', '', 'eduardo@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(3, 'Diego Iturbe', '', 'diego@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(4, 'Sebastían Pedrero', '', 'sebastian@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(5, 'Gustavo Fring', '', 'gustavo@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(6, 'Manuel Flores', '', 'manuel@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(7, 'Eduardo Juárez', '', 'juarez@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(8, 'Ricardo Cortés', '', 'ricardo@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(9, 'Leonardo Ramos', '', 'leonardo@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(10, 'Jorge Castro', '', 'castro@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(11, 'Walter Blanco', '', 'walter@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(12, 'Teofilo Puerto', '', 'teofilo@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(13, 'Fernanda Navarro', '', 'fernanda@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(14, 'Maria Guevara', '', 'maraia@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(15, 'Blanca Maria', '', 'blanca@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(16, 'Elizabeth Castellanos', '', 'elizabeth@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(17, 'Fabian Ventura', '', 'fabian@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(18, 'Alejandro Padilla', '', 'padilla@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(19, 'José Macías', '', 'macias@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(20, 'Miguel Hernández', '', 'miguel@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(21, 'frank cuesta', '$2a$12$tf4cXnmCvj.qknAYQdMMBeB4Awy8qdtYJSCegEoYv.TCMW6WhkoUu', 'frank@gmail.com', 35, 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'),
(23, 'camilo diaz', '$2a$12$A6aXOT21qIFXxUpsIijx4eSwDO4axTGui7OI8krm5ZqHAkuXv/lLK', 'camilo@gmail.com', 35, 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posee`
--

CREATE TABLE `posee` (
  `id_rol` int(11) NOT NULL,
  `id_privilegio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `posee`
--

INSERT INTO `posee` (`id_rol`, `id_privilegio`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 20),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 16),
(2, 17),
(2, 18),
(2, 20),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 15),
(3, 16),
(3, 17),
(3, 18),
(3, 19),
(3, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilegios`
--

CREATE TABLE `privilegios` (
  `id_privilegio` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id_privilegio`, `descripcion`) VALUES
(1, 'Agregar Tarea'),
(2, 'Modificar Tarea'),
(3, 'Consultar Tarea'),
(4, 'Eliminar Tarea'),
(5, 'Visualizar colaborador'),
(6, 'Visualizar proyectos'),
(7, 'Asignar colaboradores a proyecto'),
(8, 'Eliminar colaborador'),
(9, 'Crear proyecto'),
(10, 'Agregar horas de ausencia'),
(11, 'Modificar proyecto'),
(12, 'Generar reporte'),
(13, 'Modificar catálogo de parámetros'),
(14, 'Eliminar proyecto'),
(15, 'Asignar líder a proyecto'),
(16, 'Crear etiqueta'),
(17, 'Modificar etiqueta'),
(18, 'Eliminar etiqueta'),
(19, 'Eliminar reporte'),
(20, 'Consultar proyectos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id_proyecto` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `importancia` varchar(11) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `estatus` varchar(20) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `es_etiqueta` tinyint(1) NOT NULL,
  `image_url` varchar(2038) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `id_empleado` int(11) NOT NULL,
  `descripcion` varchar(256) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `stack_tecnologia` varchar(128) COLLATE utf8mb4_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`id_proyecto`, `nombre`, `importancia`, `estatus`, `es_etiqueta`, `image_url`, `id_empleado`, `descripcion`, `stack_tecnologia`) VALUES
(1, 'Altair', 'Alto', 'Planeación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3, 'proyecto altair', 'VR, javascript'),
(2, 'Erelis 2.0', 'Alto', 'Diseño', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3, 'proyecto erelis', 'html, c++'),
(3, 'Oasis', 'Medio', 'Análisis', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 2, 'if i could turn back time, if i could find a way, i´d take back all those words that hurt you, and you´d stay', 'c#, C'),
(4, 'Poseidon', 'Medio', 'Pruebas', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 5, '.', 'Python, OS'),
(5, 'Tu Cuenta', 'Bajo', 'Planeación', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 6, 'jijija', 'CSS, Java, HTML'),
(6, 'Gestión documental EDS', 'Alto', 'Mantenimiento', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3, 'jajaji', 'Python, c++'),
(7, 'Negocio-CMMI', 'Alto', 'Construcción', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 2, 'gigachadsssssssssssssssssssssssssss', 'WinRar, Netflix'),
(8, 'Negocio-NatDev', 'Medio', 'Documentación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 4, 'oh i know that it´s only gold and i come slow now for everythign, the heavy wing', 'Burger kING, Mcdonals'),
(9, 'RPA-Factura de Luz', 'Medio', 'Pruebas', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 8, 'and i´d give up forever to touch you, cause i know that you feel me somehwo, where everythings made to be broken, i just want you to know how i am', 'KFC, Pantene'),
(10, 'Tu Cuenta-Gran Consumo', 'Bajo', 'Despliegue', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 11, 'those who died are justified, for wearing a badge they are the chose whites', 'HP, Swiss army'),
(11, 'Origenes 3.0', 'Alto', 'Planeación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 15, 'the echoe of a distant time comes wallowing across the sand', 'C++, C, C#'),
(12, 'Reporte de Seguimiento a prospectos', 'Alto', 'Diseño', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 19, 'scar tissue that i wish you saw, sarcastic mr know it all, i close your eyes and i kiss your cause with the birds i ll share', 'HTML, Java'),
(13, 'Junta Directivos', 'Medio', 'Análisis', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 2, 'the lady in red, she comes to me, ', 'RHCP, MD, S'),
(14, 'Impúlsate-Prod.Adicionales', 'Alto', 'Pruebas', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 2, 'I have never seen that dress you\'re wearing Or that highlight in your hair That catch your eyes I have been blind', 'Slipknot, judas priest'),
(15, 'Oasis-Entregable', 'Alto', 'Planeación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3, 'cant stop addicted to the shinding, hop top he says im gonna win big, choose not the life of imitation, distatn cousin to the reservation', 'Metallica, Jordania'),
(16, 'Capacitación Auth0', 'Medio', 'Mantenimiento', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 1, 'defunct the psitol the you pay for, this punk the feeling that you stayfor, in time i want to be your best friend peace and love is living on the west then', 'Incredible Hulk, Captain Marvel'),
(17, 'Brainstorming', 'Medio', 'Construcción', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 4, 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 'DC, marvel'),
(18, 'Sindicate', 'Bajo', 'Documentación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 6, 'waaaaaaaaaaaaaaaaaaaaasaaaaaaaaaaaaaaaaaaaaaaaaaa', 'Straganf, c++'),
(19, 'Junta colaboradores Altair', 'Alto', 'Pruebas', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 5, 'according to all known laws of aviation, there is now way a bee should fly, the bee however', 'Bee movie, Seinfeld'),
(20, 'Presentación a directivos', 'Alto', 'Despliegue', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3, 'e4e5kd4asofkasposañlfkasofja+psojasdpockasd´cpasdkvpásdvdvasd', 'Community, Spdierma'),
(26, 'Junta urgente', NULL, NULL, 1, NULL, 23, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `realiza`
--

CREATE TABLE `realiza` (
  `id_empleado` int(11) NOT NULL,
  `id_tarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `realiza`
--

INSERT INTO `realiza` (`id_empleado`, `id_tarea`) VALUES
(1, 1),
(1, 4),
(1, 8),
(1, 71),
(1, 72),
(2, 2),
(2, 71),
(3, 3),
(3, 11),
(3, 14),
(3, 19),
(3, 73),
(4, 4),
(4, 12),
(4, 15),
(5, 5),
(5, 13),
(6, 6),
(6, 16),
(6, 73),
(7, 7),
(8, 8),
(8, 18),
(8, 69),
(9, 9),
(10, 10),
(10, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reportes`
--

CREATE TABLE `reportes` (
  `id_reporte` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `efectividad` int(5) NOT NULL,
  `horas_hombre` int(5) NOT NULL,
  `horas_base` int(5) NOT NULL,
  `horas_ausencia` int(5) NOT NULL,
  `proporcion_horas` int(5) NOT NULL,
  `id_empleado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `reportes`
--

INSERT INTO `reportes` (`id_reporte`, `fecha_inicio`, `fecha_fin`, `efectividad`, `horas_hombre`, `horas_base`, `horas_ausencia`, `proporcion_horas`, `id_empleado`) VALUES
(2, '2022-08-31', '2022-08-08', 98, 500, 415, 65, 1, 3),
(3, '2022-09-08', '2022-09-15', 96, 500, 410, 60, 1, 2),
(4, '2022-09-16', '2022-09-25', 95, 500, 402, 70, 1, 5),
(5, '2022-09-26', '2022-09-29', 99, 500, 421, 50, 1, 6),
(6, '2022-10-01', '2022-10-07', 80, 500, 342, 34, 1, 3),
(7, '2022-10-08', '2022-10-15', 89, 500, 380, 45, 1, 2),
(8, '2022-10-16', '2022-10-22', 90, 500, 381, 55, 1, 4),
(9, '2022-10-23', '2022-10-28', 75, 500, 320, 60, 1, 8),
(10, '2022-10-29', '2022-11-06', 88, 500, 372, 35, 1, 11),
(11, '2022-11-07', '2022-11-16', 82, 500, 350, 80, 1, 15),
(12, '2022-11-17', '2022-11-20', 91, 500, 386, 80, 1, 19),
(13, '2022-11-21', '2022-11-27', 92, 500, 391, 85, 1, 2),
(14, '2022-11-28', '2022-12-05', 88, 500, 374, 75, 1, 2),
(15, '2022-12-06', '2022-11-12', 83, 500, 352, 45, 1, 3),
(16, '2022-11-13', '2022-12-19', 80, 500, 341, 56, 1, 1),
(17, '2022-12-20', '2022-12-26', 85, 500, 362, 67, 1, 4),
(18, '2022-12-27', '2023-01-09', 74, 500, 314, 85, 1, 6),
(19, '2023-01-10', '2023-01-17', 69, 500, 294, 56, 1, 5),
(20, '2023-01-18', '2023-01-28', 71, 500, 301, 55, 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `descripcion` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_rol`, `descripcion`) VALUES
(1, 'colaborador'),
(2, 'líder'),
(3, 'coordinador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id_tarea` int(11) NOT NULL,
  `fecha_creacion` date NOT NULL DEFAULT current_timestamp(),
  `descripcion` varchar(100) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `id_proyecto` int(11) NOT NULL,
  `duracion` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id_tarea`, `fecha_creacion`, `descripcion`, `id_proyecto`, `duracion`) VALUES
(1, '2021-11-08', 'Junta cliente', 3, 1),
(2, '2021-12-08', 'Desarrollo casos de prueba', 2, 0.5),
(3, '2022-01-09', 'Diagrama de bases datos', 5, 3),
(4, '2022-01-09', 'Corrección base de datos', 1, 3),
(5, '2022-03-09', 'Junta nuevas normas', 1, 2),
(6, '2022-04-09', 'Visualización de datos', 6, 4),
(7, '2022-04-09', 'Desarrollo interfaz', 7, 0.5),
(8, '2022-06-09', 'Lluvia de ideas', 2, 1),
(9, '2022-05-09', 'Planificación', 8, 0.5),
(10, '2022-08-09', 'Querys', 4, 2),
(11, '2022-09-09', 'Bugs', 6, 2),
(12, '2022-10-09', 'Interacción con Auth0', 9, 0.5),
(13, '2022-11-09', 'descripcion de interfaz', 9, 4),
(14, '2022-11-09', 'Junta con Cliente', 10, 2),
(15, '2022-11-09', 'Interconexión rutas', 2, 3),
(16, '2022-12-09', 'Creación de presentación', 1, 1),
(17, '2023-01-09', 'Modelos  HTML', 3, 1),
(18, '2023-02-09', 'Capacitación de Node', 5, 0.5),
(19, '2023-03-09', 'Pruebas', 7, 3),
(20, '2023-04-09', 'Junta con directores', 4, 2),
(21, '2022-09-06', 'Junta cliente', 3, 1),
(22, '2022-09-06', 'Desarrollo casos de prueba', 2, 0.5),
(23, '2022-09-20', 'junta', 3, 0.5),
(33, '2022-08-09', 'Jerry', 2, 1.5),
(34, '2022-08-09', 'Jerry', 2, 0.5),
(45, '2022-09-20', 'Jerry', 1, 0.5),
(46, '2022-09-02', 'Jerry', 1, 0.5),
(47, '2022-09-03', 'Jerry', 1, 0.5),
(48, '2022-09-01', 'Jerry', 1, 0.5),
(49, '2022-09-30', 'Jerry', 1, 0.5),
(50, '2022-09-06', 'Jerry', 2, 3.5),
(51, '2022-09-01', 'Jerry', 1, 0.5),
(52, '2022-09-21', 'Jerry', 2, 1.5),
(53, '2022-09-21', 'Jerry', 1, 1.5),
(54, '2022-09-20', 'Jerry', 3, 0.5),
(55, '2022-08-31', 'Jerry', 1, 0.5),
(56, '2022-09-06', 'Jerry', 1, 1.5),
(57, '2022-09-06', 'Jerry', 1, 1.5),
(58, '2022-09-06', 'Jerry', 1, 1.5),
(59, '2022-09-14', 'Jerry', 1, 1.5),
(60, '2022-09-07', 'Jerry', 1, 1.5),
(61, '2022-09-04', 'Jerry', 1, 1.5),
(62, '2022-09-29', 'Jerry', 1, 5.5),
(63, '2022-09-06', 'd', 2, 2.5),
(64, '2022-09-08', 'Jerry', 1, 1.5),
(65, '2022-09-06', 'Jerry', 1, 1.5),
(66, '2022-09-06', 'd', 2, 2.5),
(67, '2022-08-30', 'Jerry', 2, 1.5),
(68, '2022-09-06', 'Jerry', 6, 1.5),
(69, '2022-09-19', 'Jerry', 2, 1.5),
(70, '2022-09-07', 'Jerry', 3, 2.5),
(71, '2022-08-31', 'Jerry', 2, 1.5),
(72, '2022-09-08', 'Jerry', 1, 2.5),
(73, '2022-09-22', 'rt', 4, 1.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiene`
--

CREATE TABLE `tiene` (
  `id_empleado` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tiene`
--

INSERT INTO `tiene` (`id_empleado`, `id_rol`, `fecha`) VALUES
(1, 3, '2022-09-07 22:41:30'),
(2, 1, '2022-09-07 22:41:30'),
(3, 1, '2022-09-07 22:41:30'),
(4, 3, '2022-09-07 22:41:30'),
(5, 3, '2022-09-07 22:41:30'),
(6, 1, '2022-09-07 22:41:30'),
(7, 1, '2022-09-07 22:41:30'),
(8, 2, '2022-09-07 22:41:30'),
(9, 3, '2022-09-07 22:41:30'),
(10, 1, '2022-09-07 22:41:30'),
(11, 2, '2022-09-07 22:41:30'),
(12, 2, '2022-09-07 22:41:30'),
(13, 2, '2022-09-07 22:41:30'),
(14, 3, '2022-09-07 22:41:30'),
(15, 1, '2022-09-07 22:41:30'),
(16, 1, '2022-09-07 22:41:30'),
(17, 2, '2022-09-07 22:41:30'),
(18, 1, '2022-09-07 22:41:30'),
(19, 2, '2022-09-07 22:41:30'),
(20, 1, '2022-09-07 22:41:30'),
(21, 1, '2022-09-11 00:52:22'),
(23, 3, '2022-09-11 00:50:45');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_empleado`,`correo_electronico`);

--
-- Indices de la tabla `posee`
--
ALTER TABLE `posee`
  ADD PRIMARY KEY (`id_rol`,`id_privilegio`),
  ADD KEY `posee_fk_1` (`id_privilegio`);

--
-- Indices de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id_privilegio`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id_proyecto`),
  ADD KEY `proyecto_fk_1` (`id_empleado`);

--
-- Indices de la tabla `realiza`
--
ALTER TABLE `realiza`
  ADD PRIMARY KEY (`id_empleado`,`id_tarea`),
  ADD KEY `realizar_fk_2` (`id_tarea`);

--
-- Indices de la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD PRIMARY KEY (`id_reporte`),
  ADD KEY `reportes_fk_1` (`id_empleado`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id_tarea`),
  ADD KEY `tareas_fk_1` (`id_proyecto`);

--
-- Indices de la tabla `tiene`
--
ALTER TABLE `tiene`
  ADD PRIMARY KEY (`id_empleado`,`id_rol`),
  ADD KEY `tiene_fk_2` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id_privilegio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id_proyecto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `reportes`
--
ALTER TABLE `reportes`
  MODIFY `id_reporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id_tarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `posee`
--
ALTER TABLE `posee`
  ADD CONSTRAINT `posee_fk_1` FOREIGN KEY (`id_privilegio`) REFERENCES `privilegios` (`id_privilegio`),
  ADD CONSTRAINT `posee_fk_2` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`);

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `proyecto_fk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id_empleado`);

--
-- Filtros para la tabla `realiza`
--
ALTER TABLE `realiza`
  ADD CONSTRAINT `realiza_fk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id_empleado`),
  ADD CONSTRAINT `realizar_fk_2` FOREIGN KEY (`id_tarea`) REFERENCES `tareas` (`id_tarea`);

--
-- Filtros para la tabla `reportes`
--
ALTER TABLE `reportes`
  ADD CONSTRAINT `reportes_fk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id_empleado`);

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_fk_1` FOREIGN KEY (`id_proyecto`) REFERENCES `proyectos` (`id_proyecto`);

--
-- Filtros para la tabla `tiene`
--
ALTER TABLE `tiene`
  ADD CONSTRAINT `tiene_fk_1` FOREIGN KEY (`id_empleado`) REFERENCES `empleados` (`id_empleado`),
  ADD CONSTRAINT `tiene_fk_2` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
