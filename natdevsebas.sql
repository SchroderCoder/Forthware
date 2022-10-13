-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema NatDev
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema NatDev
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `NatDev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci ;
USE `NatDev` ;

-- -----------------------------------------------------
-- Table `NatDev`.`crea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`crea` (
  `id_empleado` INT NOT NULL,
  `id_proyecto` INT NOT NULL,
  PRIMARY KEY (`id_empleado`, `id_proyecto`),
  INDEX `crea_fk_2` (`id_proyecto` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`empleados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`empleados` (
  `id_empleado` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(40) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_spanish2_ci' NOT NULL,
  `correo_electronico` VARCHAR(62) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_spanish2_ci' NOT NULL,
  `disponibilidad` INT NOT NULL,
  `image_url` VARCHAR(2083) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_spanish2_ci' NOT NULL,
  `is_active` BIT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id_empleado`, `correo_electronico`))
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`privilegios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`privilegios` (
  `id_privilegio` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(50) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_spanish2_ci' NOT NULL,
  PRIMARY KEY (`id_privilegio`))
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`roles` (
  `id_rol` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(20) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_spanish2_ci' NOT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`posee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`posee` (
  `id_rol` INT NOT NULL,
  `id_privilegio` INT NOT NULL,
  PRIMARY KEY (`id_rol`, `id_privilegio`),
  INDEX `posee_fk_1` (`id_privilegio` ASC) VISIBLE,
  CONSTRAINT `posee_fk_1`
    FOREIGN KEY (`id_privilegio`)
    REFERENCES `NatDev`.`privilegios` (`id_privilegio`),
  CONSTRAINT `posee_fk_2`
    FOREIGN KEY (`id_rol`)
    REFERENCES `NatDev`.`roles` (`id_rol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`proyectos` (
  `id_proyecto` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(128) NULL DEFAULT NULL,
  `importancia` VARCHAR(11) NULL DEFAULT NULL,
  `estatus` VARCHAR(20) NULL DEFAULT NULL,
  `es_etiqueta` TINYINT(1) NOT NULL,
  `image_url` VARCHAR(2038) NULL DEFAULT NULL,
  `id_empleado` INT NULL DEFAULT NULL,
  `nombre` VARCHAR(40) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_spanish2_ci' NOT NULL,
  `stack_tecnologia` VARCHAR(128) NULL DEFAULT NULL,
  `is_deleted` TINYINT NULL DEFAULT '0',
  `horas` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`id_proyecto`),
  INDEX `proyecto_fk_1` (`id_empleado` ASC) VISIBLE,
  CONSTRAINT `proyecto_fk_1`
    FOREIGN KEY (`id_empleado`)
    REFERENCES `NatDev`.`empleados` (`id_empleado`))
ENGINE = InnoDB
AUTO_INCREMENT = 58
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`tareas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`tareas` (
  `id_tarea` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_spanish2_ci' NULL DEFAULT NULL,
  `id_proyecto` INT NOT NULL,
  `duracion` FLOAT NOT NULL,
  `is_deleted` INT NULL DEFAULT '0',
  `fecha_creacion` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id_tarea`),
  INDEX `tareas_fk_1` (`id_proyecto` ASC) VISIBLE,
  CONSTRAINT `tareas_fk_1`
    FOREIGN KEY (`id_proyecto`)
    REFERENCES `NatDev`.`proyectos` (`id_proyecto`))
ENGINE = InnoDB
AUTO_INCREMENT = 139
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`realiza`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`realiza` (
  `id_empleado` INT NOT NULL,
  `id_tarea` INT NOT NULL,
  PRIMARY KEY (`id_empleado`, `id_tarea`),
  INDEX `realizar_fk_2` (`id_tarea` ASC) VISIBLE,
  CONSTRAINT `realiza_fk_1`
    FOREIGN KEY (`id_empleado`)
    REFERENCES `NatDev`.`empleados` (`id_empleado`),
  CONSTRAINT `realizar_fk_2`
    FOREIGN KEY (`id_tarea`)
    REFERENCES `NatDev`.`tareas` (`id_tarea`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`reportes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`reportes` (
  `id_reporte` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NOT NULL,
  `efectividad_ajustada` DOUBLE(5,2) NULL DEFAULT NULL,
  `horas_hombre` DOUBLE(5,2) NULL DEFAULT NULL,
  `horas_base` DOUBLE(5,2) NULL DEFAULT NULL,
  `horas_ausencia` DOUBLE(5,2) NULL DEFAULT NULL,
  `efectividad` DOUBLE(5,2) NULL DEFAULT NULL,
  `id_empleado` INT NOT NULL,
  `is_deleted` TINYINT(1) NULL DEFAULT '0',
  `pdf_reportes` VARCHAR(2038) NULL DEFAULT NULL,
  PRIMARY KEY (`id_reporte`),
  INDEX `reportes_fk_1` (`id_empleado` ASC) VISIBLE,
  CONSTRAINT `reportes_fk_1`
    FOREIGN KEY (`id_empleado`)
    REFERENCES `NatDev`.`empleados` (`id_empleado`))
ENGINE = InnoDB
AUTO_INCREMENT = 69
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;


-- -----------------------------------------------------
-- Table `NatDev`.`tiene`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`tiene` (
  `id_empleado` INT NOT NULL,
  `id_rol` INT NOT NULL,
  `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_empleado`, `id_rol`),
  INDEX `tiene_fk_2` (`id_rol` ASC) VISIBLE,
  CONSTRAINT `tiene_fk_1`
    FOREIGN KEY (`id_empleado`)
    REFERENCES `NatDev`.`empleados` (`id_empleado`),
  CONSTRAINT `tiene_fk_2`
    FOREIGN KEY (`id_rol`)
    REFERENCES `NatDev`.`roles` (`id_rol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;

USE `NatDev` ;

-- -----------------------------------------------------
-- Placeholder table for view `NatDev`.`horas_proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`horas_proyecto` (`nombre` INT, `horas` INT);

-- -----------------------------------------------------
-- Placeholder table for view `NatDev`.`horas_tarea`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`horas_tarea` (`id_proyecto` INT, `id_tarea` INT, `duracion` INT);

-- -----------------------------------------------------
-- procedure crearProyecto
-- -----------------------------------------------------

DELIMITER $$
USE `NatDev`$$
CREATE DEFINER=`root`@`%` PROCEDURE `crearProyecto`(un_array JSON, un_nombre VARCHAR(40), un_importancia VARCHAR(11), un_descripcion VARCHAR(128), un_stack_tecnologia VARCHAR(128),un_estatus VARCHAR(20), un_image_url VARCHAR(2038))
BEGIN
    START TRANSACTION;
		INSERT INTO proyectos (nombre, descripcion, stack_tecnologia, importancia, estatus, es_etiqueta, image_url) VALUES (un_nombre, un_descripcion, un_stack_tecnologia, un_importancia, un_estatus, 0, un_image_url);
        SET @x=0;
        SELECT MAX(id_proyecto) AS reciente FROM `proyectos` ;
		WHILE @x<= JSON_LENGTH(un_array) DO
			INSERT INTO crea(id_empleado, id_proyecto) VALUES (JSON_VALUE(un_array, '$[x]'),reciente);
            SET @x= @x+1;	
        END WHILE;
    COMMIT;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- View `NatDev`.`horas_proyecto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `NatDev`.`horas_proyecto`;
USE `NatDev`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `NatDev`.`horas_proyecto` AS select `P`.`nombre` AS `nombre`,sum(`NatDev`.`H`.`duracion`) AS `horas` from ((`NatDev`.`horas_tarea` `H` join `NatDev`.`tareas` `T`) join `NatDev`.`proyectos` `P`) where ((`P`.`id_proyecto` = `NatDev`.`H`.`id_proyecto`) and (`T`.`id_tarea` = `NatDev`.`H`.`id_tarea`)) group by `NatDev`.`H`.`id_proyecto`;

-- -----------------------------------------------------
-- View `NatDev`.`horas_tarea`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `NatDev`.`horas_tarea`;
USE `NatDev`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW `NatDev`.`horas_tarea` AS select `T`.`id_proyecto` AS `id_proyecto`,`T`.`id_tarea` AS `id_tarea`,(`T`.`duracion` * count(`R`.`id_empleado`)) AS `duracion` from ((`NatDev`.`tareas` `T` join `NatDev`.`realiza` `R`) join `NatDev`.`proyectos` `P`) where ((`T`.`id_tarea` = `R`.`id_tarea`) and (`T`.`id_proyecto` = `P`.`id_proyecto`) and (`T`.`is_deleted` = 0)) group by `R`.`id_tarea` order by `T`.`id_proyecto`,`T`.`id_tarea`;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
