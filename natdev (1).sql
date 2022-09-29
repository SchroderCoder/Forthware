-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-09-2022 a las 17:32:47
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
-- Base de datos: `natdev`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_empleado` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `correo_electronico` varchar(62) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `disponibilidad` int(5) NOT NULL,
  `image_url` varchar(2083) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_empleado`, `nombre`, `correo_electronico`, `disponibilidad`, `image_url`) VALUES
(1, 'Carlos García', 'carlos@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(2, 'Eduardo Díaz', 'eduardo@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(3, 'Diego Iturbe', 'diego@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(4, 'Sebastían Pedrero', 'sebastian@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(5, 'Gustavo Fring', 'gustavo@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(6, 'Manuel Flores', 'manuel@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(7, 'Eduardo Juárez', 'juarez@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(8, 'Ricardo Cortés', 'ricardo@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(9, 'Leonardo Ramos', 'leonardo@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(10, 'Jorge Castro', 'castro@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg '),
(11, 'Walter Blanco', 'walter@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(12, 'Teofilo Puerto', 'teofilo@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(13, 'Fernanda Navarro', 'fernanda@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(14, 'Maria Guevara', 'maraia@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(15, 'Blanca Maria', 'blanca@gmail.com', 18, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(16, 'Elizabeth Castellanos', 'elizabeth@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(17, 'Fabian Ventura', 'fabian@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(18, 'Alejandro Padilla', 'padilla@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(19, 'José Macías', 'macias@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg'),
(20, 'Miguel Hernández', 'miguel@gmail.com', 35, 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg');

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
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id_proyecto` int(11) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `importancia` varchar(11) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `estatus` varchar(20) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `es_etiqueta` tinyint(1) NOT NULL,
  `image_url` varchar(2038) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `id_empleado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id_proyecto`, `descripcion`, `importancia`, `estatus`, `es_etiqueta`, `image_url`, `id_empleado`) VALUES
(1, 'Altair', 'Alto', 'Planeación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 1),
(2, 'Erelis 2.0', 'Alto', 'Diseño', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3),
(3, 'Oasis', 'Medio', 'Análisis', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 2),
(4, 'Poseidon', 'Medio', 'Pruebas', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 5),
(5, 'Tu Cuenta', 'Bajo', 'Planeación', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 6),
(6, 'Gestión documental EDS', 'Alto', 'Mantenimiento', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3),
(7, 'Negocio-CMMI', 'Alto', 'Construcción', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 2),
(8, 'Negocio-NatDev', 'Medio', 'Documentación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 4),
(9, 'RPA-Factura de Luz', 'Medio', 'Pruebas', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 8),
(10, 'Tu Cuenta-Gran Consumo', 'Bajo', 'Despliegue', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 11),
(11, 'Origenes 3.0', 'Alto', 'Planeación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 15),
(12, 'Reporte de Seguimiento a prospectos', 'Alto', 'Diseño', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 19),
(13, 'Junta Directivos', 'Medio', 'Análisis', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 2),
(14, 'Impúlsate-Prod.Adicionales', 'Alto', 'Pruebas', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 2),
(15, 'Oasis-Entregable', 'Alto', 'Planeación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3),
(16, 'Capacitación Auth0', 'Medio', 'Mantenimiento', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 1),
(17, 'Brainstorming', 'Medio', 'Construcción', 0, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 4),
(18, 'Sindicate', 'Bajo', 'Documentación', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 6),
(19, 'Junta colaboradores Altair', 'Alto', 'Pruebas', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 5),
(20, 'Presentación a directivos', 'Alto', 'Despliegue', 1, 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `realiza`
--

CREATE TABLE `realiza` (
  `id_empleado` int(11) NOT NULL,
  `id_tarea` int(11) NOT NULL,
  `rol_de_entrega` varchar(40) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `realiza`
--

INSERT INTO `realiza` (`id_empleado`, `id_tarea`, `rol_de_entrega`) VALUES
(1, 1, 'colaborador'),
(2, 2, 'colaborador'),
(3, 3, 'colaborador'),
(3, 11, 'colaborador'),
(3, 14, 'colaborador'),
(3, 19, 'colaborador'),
(4, 4, 'colaborador'),
(4, 12, 'colaborador'),
(4, 15, 'colaborador'),
(5, 5, 'colaborador'),
(5, 13, 'colaborador'),
(6, 6, 'lider'),
(6, 16, 'lider'),
(7, 7, 'colaborador'),
(8, 8, 'colaborador'),
(8, 18, 'colaborador'),
(9, 9, 'colaborador'),
(10, 10, 'colaborador'),
(10, 17, 'colaborador');

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
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `descripcion` varchar(100) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `id_proyecto` int(11) NOT NULL,
  `duracion` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id_tarea`, `fecha_creacion`, `descripcion`, `id_proyecto`, `duracion`) VALUES
(1, '2021-11-08 16:34:01', 'Junta cliente', 3, 1),
(2, '2021-12-08 16:00:02', 'Desarrollo casos de prueba', 2, 0.5),
(3, '2022-01-09 16:02:03', 'Diagrama de bases datos', 5, 3),
(4, '2022-01-09 16:20:04', 'Corrección base de datos', 1, 3),
(5, '2022-03-09 16:00:02', 'Junta nuevas normas', 1, 2),
(6, '2022-04-09 15:34:08', 'Visualización de datos', 6, 4),
(7, '2022-04-09 15:12:10', 'Desarrollo interfaz', 7, 0.5),
(8, '2022-06-09 15:00:00', 'Lluvia de ideas', 2, 1),
(9, '2022-05-09 16:00:09', 'Planificación', 8, 0.5),
(10, '2022-08-09 14:00:12', 'Querys', 4, 2),
(11, '2022-09-09 16:00:19', 'Bugs', 6, 2),
(12, '2022-10-09 15:00:49', 'Interacción con Auth0', 9, 0.5),
(13, '2022-11-09 16:21:45', 'descripcion de interfaz', 9, 4),
(14, '2022-11-09 17:43:12', 'Junta con Cliente', 10, 2),
(15, '2022-11-09 18:49:48', 'Interconexión rutas', 2, 3),
(16, '2022-12-09 18:33:59', 'Creación de presentación', 1, 1),
(17, '2023-01-09 18:12:00', 'Modelos  HTML', 3, 1),
(18, '2023-02-09 17:11:01', 'Capacitación de Node', 5, 0.5),
(19, '2023-03-09 15:50:03', 'Pruebas', 7, 3),
(20, '2023-04-09 15:30:09', 'Junta con directores', 4, 2),
(21, '2022-09-06 18:20:03', 'Junta cliente', 3, 1),
(22, '2022-09-06 18:20:03', 'Desarrollo casos de prueba', 2, 0.5);

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
(20, 1, '2022-09-07 22:41:30');

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
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
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
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id_privilegio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id_proyecto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
  MODIFY `id_tarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
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
  ADD CONSTRAINT `tareas_fk_1` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`);

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
