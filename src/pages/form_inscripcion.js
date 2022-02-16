import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./form_inscription.css";

class Form_inscripcion extends Component {
  state = {
    nombre: "",
  };

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <div className="container_title">
          <h1>HOJA DE DATOS PERSONALES PERSONAL DE LA PLANTA</h1>
        </div>
        <form onClick={this.handlerSubmit} className="form_line">
          <div className="container_form">
            <div className="container_elements_1">
              <h3>1. INFOMACION GENERAL</h3>
            </div>
            <div className="container_elements">
              <label for="grado">Grado</label>
              <input
                type="text"
                class="form-control"
                name="grado"
                id="grado"
                required
              />
            </div>
            <div className="container_elements">
              <label for="nombre">Nombre</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
                required
              />
            </div>
            <div className="container_elements">
              <label for="domicilio">Domicilio</label>
              <input
                type="text"
                class="form-control"
                name="domicilio"
                id="domicilio"
              />
            </div>
            <div className="container_elements">
              <label for="telefono" class="">
                Teléfono de casa
              </label>
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
              />
            </div>
            <div className="container_elements">
              <label for="celular" class="">
                Telefono celular
              </label>
              <input
                type="text"
                class="form-control"
                name="celular"
                id="celular"
                required
              ></input>
            </div>
            <div className="container_elements">
              <label for="correo" class="">
                Correo
              </label>
              <input
                type="email"
                class="form-control"
                name="correo"
                id="correo"
              />
            </div>
            <div className="container_elements">
              <label for="lugar_nacimiento" class="">
                Lugar de nacimiento
              </label>
              <input
                type="text"
                class="form-control"
                name="lugar_nacimiento"
                id="lugar_nacimiento"
                required
              />
            </div>
            <div className="container_elements">
              <label for="fecha_nacimiento" class="">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                class="form-control"
                name="fecha_nacimiento"
                id="fecha_nacimiento"
                required
              />
            </div>
            <div className="container_elements">
              <label for="fecha_alta_plantel" class="">
                Fecha alta en plantel
              </label>
              <input
                type="date"
                class="form-control"
                name="fecha_alta_plantel"
                id="fecha_alta_plantel"
              />
            </div>
            <div className="container_elements">
              <label for="fecha_alta_ejercito" class="">
                Fecha alta en el ejército
              </label>
              <input
                type="date"
                class="form-control"
                name="fecha_alta_ejercito"
                id="fecha_alta_ejercito"
                required
              />
            </div>
            <div className="container_elements">
              <label for="matriula" class="">
                Matricula
              </label>
              <input
                type="text"
                class="form-control"
                name="matriula"
                id="matriula"
                required
              />
            </div>
            <div className="container_elements">
              <label for="cedula" class="">
                Cédula Profesional
              </label>
              <input
                type="text"
                class="form-control"
                name="cedula"
                id="cedula"
                required
              />
            </div>
            <div className="container_elements">
              <label for="curp" class="">
                CURP
              </label>
              <input
                type="text"
                class="form-control"
                name="curp"
                id="curp"
                required
              />
            </div>
            <div className="container_elements">
              <label for="estado_civil" class="">
                Estado civil
              </label>
              <input
                type="text"
                class="form-control"
                name="estado_civil"
                id="estado_civil"
              />
            </div>
            <div className="container_elements">
              <label for="rfc" class="">
                RFC
              </label>
              <input type="text" class="form-control" name="rfc" id="rfc" />
            </div>
            <div className="container_elements">
              <label for="cta_banjico" class="">
                Cuenta Banjico
              </label>
              <input
                type="text"
                class="form-control"
                name="cta_banjico"
                id="cta_banjico"
                required
              />
            </div>
            <div className="container_elements">
              <label for="cta_banjico" class="">
                Cuenta Banjico
              </label>
              <input
                type="text"
                class="form-control"
                name="cta_banjico"
                id="cta_banjico"
                required
              />
            </div>
            <div className="container_elements">
              <label for="no_calzado" class="">
                Número clazado
              </label>
              <input
                type="text"
                class="form-control"
                name="no_calzado"
                id="no_calzado"
                required
              />
            </div>
            <hr />
            <hr />
            <hr />
            <div className="container_elements_1">
              <h3>2. INFOMACION PROFESIONAL</h3>
            </div>
            <div className="container_elements_subtitle">
              <h5>ESTUDIOS EFECTUADOS</h5>
            </div>
            <div className="container_elements">
              <label for="primaria">Primaria</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nombre"
                name="primaria"
                id="primaria"
              />
            </div>
            <div className="container_elements">
              <label for="ano_inicio_primaria">Año de inicio</label>
              <input
                type="text"
                class="form-control"
                name="ano_inicio_primaria"
                id="ano_inicio_primaria"
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="container_elements">
              <label for="ano_termino_primaria">Año de termino</label>
              <input
                type="text"
                class="form-control"
                name="ano_termino_primaria"
                id="ano_termino_primaria"
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="container_elements">
              <label for="secundaria" class="">
                Secundaria
              </label>
              <input
                type="text"
                class="form-control"
                name="secundaria"
                id="secundaria"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements">
              <label for="ano_inicio_secundaria" class="">
                Año de inicio
              </label>
              <input
                type="text"
                class="form-control"
                name="ano_inicio_secundaria mt-5"
                id="ano_inicio_secundaria"
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="container_elements">
              <label for="ano_termino_secundaria" class="">
                Año de termino
              </label>
              <input
                type="text"
                class="form-control"
                name="ano_termino_secundaria"
                id="ano_termino_secundaria"
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="container_elements">
              <label for="preparatoria" class="">
                Preparatoria
              </label>
              <input
                type="text"
                class="form-control"
                name="preparatoria"
                id="preparatoria"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements">
              <label for="ano_inicio_preparatoria" class="">
                Año de inicio
              </label>
              <input
                type="text"
                class="form-control"
                name="ano_inicio_preparatoria mt-5"
                id="ano_inicio_preparatoria"
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="container_elements">
              <label for="ano_termino_preparatoria" class="">
                Año de termino
              </label>
              <input
                type="text"
                class="form-control"
                name="ano_termino_preparatoria"
                id="ano_termino_preparatoria"
                placeholder="dd/mm/aaaaa"
              />
            </div>
            <div className="container_elements">
              <label for="profesional" class="">
                Profesional
              </label>
              <input
                type="text"
                class="form-control"
                name="profesional"
                id="profesional"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements">
              <label for="ano_inicio_profesional" class="">
                Año de inicio
              </label>
              <input
                type="text"
                class="form-control"
                name="ano_inicio_profesional"
                id="ano_inicio_profesional"
                placeholder="dd/mm/dddd"
              />
            </div>
            <div className="container_elements">
              <label for="ano_termino_profesional" class="">
                Año de termino
              </label>
              <input
                type="text"
                class="form-control"
                name="ano_termino_profesional"
                id="ano_termino_profesional"
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="container_elements">
              <label for="plantel_formacion" class="">
                Plantel de formación
              </label>
              <input
                type="text"
                class="form-control"
                name="profesional"
                id="profesional"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements">
              <label for="ascensos" class="">
                Ascensos obtenidos
              </label>
              <input
                type="text"
                class="form-control"
                name="ascensos mt-5"
                id="ascensos"
              />
            </div>
            <div className="container_elements">
              <label for="fechas_asensos" class="">
                Fechas ascensos
              </label>
              <input
                type="date"
                class="form-control"
                name="fechas_asensos"
                id="fechas_asensos"
                placeholder="dd/mm/aaaa,dd/mm/dddd"
              />
            </div>
            <div className="container_idiomas">
              <label for="idioma" class="">
                Idiomas o dialectos que habla
              </label>
              <input
                type="text"
                class="form-control"
                name="idioma"
                id="idioma"
              />
            </div>
            <hr />
            <hr />
            <hr />
            <div className="container_elements_1">
              <h3>3. INFOMACION PERSONAL</h3>
            </div>
            <div className="container_elements_subtitle">
              <h5>DERECHOHABIENTES</h5>
            </div>
            <div className="container_elements">
              <label for="padre">Padre</label>
              <input
                type="text"
                class="form-control"
                name="padre"
                id="padre"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements_personal">
              <label for="edad_1">Edad</label>
              <input
                type="text"
                class="form-control "
                name="edad_1"
                id="edad_1"
              />
              <label for="años_1">años</label>
            </div>
            <div className="container_elements">
              <label for="afiliado_1">Afiliado</label>
              <input
                type="text"
                class="form-control"
                name="afiliado_1"
                id="afiliado_1"
                placeholder=""
              />
            </div>
            <div className="container_elements">
              <label for="madre" class="">
                Madre
              </label>
              <input
                type="text"
                class="form-control"
                name="madre"
                id="madre"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements_personal">
              <label for="edad_2" class="">
                Edad
              </label>
              <input
                type="text"
                class="form-control"
                name="edad_2"
                id="edad_2"
              />
              <label for="años_2" class="">
                años
              </label>
            </div>
            <div className="container_elements">
              <label for="afiliado_2" class="">
                Afiliado
              </label>
              <input
                type="text"
                class="form-control"
                name="afiliado_2"
                id="afiliado_2"
              />
            </div>
            <div className="container_elements">
              <label for="hijo_1" class="">
                Hijo(a)
              </label>
              <input
                type="text"
                class="form-control"
                name="hijo_1"
                id="hijo_1"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements_personal">
              <label for="edad_3" class="">
                Edad
              </label>
              <input
                type="text"
                class="form-control"
                name="edad_3"
                id="edad_3"
              />
              <label for="años_3" class="">
                años
              </label>
            </div>
            <div className="container_elements">
              <label for="afiliado_3" class="">
                Afiliado
              </label>
              <input
                type="text"
                class="form-control"
                name="afiliado_3"
                id="afiliado_3"
              />
            </div>
            <div className="container_elements">
              <label for="hijo_2" class="">
                Hijo(a)
              </label>
              <input
                type="text"
                class="form-control"
                name="hijo_2"
                id="hijo_2"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements_personal">
              <label for="edad_5" class="">
                Edad
              </label>
              <input
                type="text"
                class="form-control"
                name="edad_5"
                id="edad_5"
              />
              <label for="años_5" class="">
                años
              </label>
            </div>
            <div className="container_elements">
              <label for="afiliado_5" class="">
                Afiliado
              </label>
              <input
                type="text"
                class="form-control"
                name="afiliado_5"
                id="afiliado_5"
              />
            </div>
            <div className="container_elements">
              <label for="hijo_3" class="">
                Hijo(a)
              </label>
              <input
                type="text"
                class="form-control"
                name="hijo_3"
                id="hijo_3"
                placeholder="Nombre"
              />
            </div>
            <div className="container_elements_personal">
              <label for="edad_6" class="">
                Edad
              </label>
              <input
                type="text"
                class="form-control"
                name="edad_6"
                id="edad_6"
              />
              <label for="años_6" class="">
                años
              </label>
            </div>
            <div className="container_elements">
              <label for="afiliado_6" class="">
                Afiliado
              </label>
              <input
                type="text"
                class="form-control"
                name="afiliado_6"
                id="afiliado_6"
              />
            </div>
            <div className="container_emergency">
              <label for="emergencia_avisar">
                En caso de emergencia avisar a:
              </label>
              <input
                type="text"
                class="form-control"
                name="emergencia_avisar"
                id="emergencia_avisar"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="container_elements">
              <label for="emergencia_avisar_telefono">Teléfono</label>
              <input
                type="text"
                class="form-control"
                name="emergencia_avisar_telefono"
                id="emergencia_avisar_telefono"
                required
              />
            </div>
            <hr />
            <hr />
            <hr />
            <div className="container_elements_1">
              <h3>4. INFOMACION CLINICA</h3>
            </div>
            <div className="container_elements_personal">
              <label for="peso">Peso</label>
              <input
                type="text"
                class="form-control"
                name="peso"
                id="peso"
                required
              />
              <label>Kg</label>
            </div>
            <div className="container_elements_personal">
              <label for="estatura">Estatura</label>
              <input
                type="text"
                class="form-control"
                name="estatura"
                id="estatura"
                required
              />
              <label>cms</label>
            </div>
            <div className="container_elements">
              <label for="complexion">Complexión</label>
              <input
                type="text"
                class="form-control"
                name="complexion"
                id="complexion"
              />
            </div>
            <div className="container_elements">
              <label for="sangre" class="">
                Tipo sanguíneo
              </label>
              <input
                type="text"
                class="form-control"
                name="sangre"
                id="sangre"
              />
            </div>
            <div className="container_elements">
              <label for="vacunas_recibidas" class="">
                Vacunas recibidas
              </label>
              <input
                type="text"
                class="form-control"
                name="vacunas_recibidas"
                id="vacunas_recibidas"
              />
            </div>
            <div className="container_elements">
            </div>
            <hr />
            <hr />
            <hr />
            <div className="container_elements_1">
              <h3>5. DIVERSOS</h3>
            </div>
            <div className="container_elements_subtitle">
              <h5>VEHICULO PARTICULAR</h5>
            </div>
            <div className="container_elements">
              <label for="carro">Marca</label>
              <input type="text" class="form-control" name="carro" id="carro" />
            </div>
            <div className="container_elements">
              <label for="tipo_carro">Tipo</label>
              <input
                type="text"
                class="form-control"
                name="tipo_carro"
                id="tipo_carro"
              />
            </div>
            <div className="container_elements">
              <label for="placas">Placas</label>
              <input
                type="text"
                class="form-control"
                id="placas"
                name="placas"
              />
            </div>
            <div className="container_elements">
              <label for="folio_calco" class="">
                Folio calcomanía
              </label>
              <input
                type="text"
                name="folio_calco"
                class="form-control"
                id="folio_calco"
              />
            </div>
            <div className="container_elements">
              <label for="modelo_carro" class="">
                Modelo
              </label>
              <input
                type="text"
                name="modelo_carro"
                class="form-control"
                id="modelo_carro"
              />
            </div>
          </div>
          <div className="container_button">
          <button className="button_send">Enviar</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Form_inscripcion;
