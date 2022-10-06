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
  PRIMARY KEY (`id_empleado`, `id_proyecto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `crea_fk_2` ON `NatDev`.`crea` (`id_proyecto` ASC) VISIBLE;


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
  CONSTRAINT `posee_fk_1`
    FOREIGN KEY (`id_privilegio`)
    REFERENCES `NatDev`.`privilegios` (`id_privilegio`),
  CONSTRAINT `posee_fk_2`
    FOREIGN KEY (`id_rol`)
    REFERENCES `NatDev`.`roles` (`id_rol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;

CREATE INDEX `posee_fk_1` ON `NatDev`.`posee` (`id_privilegio` ASC) VISIBLE;


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
  PRIMARY KEY (`id_proyecto`),
  CONSTRAINT `proyecto_fk_1`
    FOREIGN KEY (`id_empleado`)
    REFERENCES `NatDev`.`empleados` (`id_empleado`))
ENGINE = InnoDB
AUTO_INCREMENT = 43
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;

CREATE INDEX `proyecto_fk_1` ON `NatDev`.`proyectos` (`id_empleado` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `NatDev`.`tareas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`tareas` (
  `id_tarea` INT NOT NULL AUTO_INCREMENT,
  `fecha_creacion` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `descripcion` VARCHAR(100) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_spanish2_ci' NULL DEFAULT NULL,
  `id_proyecto` INT NOT NULL,
  `duracion` FLOAT NOT NULL,
  `is_deleted` INT NULL DEFAULT '0',
  PRIMARY KEY (`id_tarea`),
  CONSTRAINT `tareas_fk_1`
    FOREIGN KEY (`id_proyecto`)
    REFERENCES `NatDev`.`proyectos` (`id_proyecto`))
ENGINE = InnoDB
AUTO_INCREMENT = 86
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;

CREATE INDEX `tareas_fk_1` ON `NatDev`.`tareas` (`id_proyecto` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `NatDev`.`realiza`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`realiza` (
  `id_empleado` INT NOT NULL,
  `id_tarea` INT NOT NULL,
  PRIMARY KEY (`id_empleado`, `id_tarea`),
  CONSTRAINT `realiza_fk_1`
    FOREIGN KEY (`id_empleado`)
    REFERENCES `NatDev`.`empleados` (`id_empleado`),
  CONSTRAINT `realizar_fk_2`
    FOREIGN KEY (`id_tarea`)
    REFERENCES `NatDev`.`tareas` (`id_tarea`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;

CREATE INDEX `realizar_fk_2` ON `NatDev`.`realiza` (`id_tarea` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `NatDev`.`reportes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`reportes` (
  `id_reporte` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` DATE NOT NULL,
  `fecha_fin` DATE NOT NULL,
  `efectividad` INT NOT NULL,
  `horas_hombre` INT NOT NULL,
  `horas_base` INT NOT NULL,
  `horas_ausencia` INT NOT NULL,
  `proporcion_horas` INT NOT NULL,
  `id_empleado` INT NOT NULL,
  `is_deleted` BIT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id_reporte`),
  CONSTRAINT `reportes_fk_1`
    FOREIGN KEY (`id_empleado`)
    REFERENCES `NatDev`.`empleados` (`id_empleado`))
ENGINE = InnoDB
AUTO_INCREMENT = 32
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;

CREATE INDEX `reportes_fk_1` ON `NatDev`.`reportes` (`id_empleado` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `NatDev`.`tiene`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NatDev`.`tiene` (
  `id_empleado` INT NOT NULL,
  `id_rol` INT NOT NULL,
  `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_empleado`, `id_rol`),
  CONSTRAINT `tiene_fk_1`
    FOREIGN KEY (`id_empleado`)
    REFERENCES `NatDev`.`empleados` (`id_empleado`),
  CONSTRAINT `tiene_fk_2`
    FOREIGN KEY (`id_rol`)
    REFERENCES `NatDev`.`roles` (`id_rol`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_spanish2_ci;

CREATE INDEX `tiene_fk_2` ON `NatDev`.`tiene` (`id_rol` ASC) VISIBLE;

USE `NatDev` ;

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

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
