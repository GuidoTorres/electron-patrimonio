import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileOutlined,
  SearchOutlined,
  BarChartOutlined,
  UserOutlined,UserSwitchOutlined, UsergroupAddOutlined
} from "@ant-design/icons";
const MenuConfiguracion = ({ setTitle }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTitle("Menu Configuración");
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "20px",
      }}
    >
      <section
        style={{ height: "250px", cursor: "pointer" }}
        onClick={() => navigate("/configuracion/usuarios")}
      >
        <div
          style={{
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height: "200px",
            width: "200px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UserOutlined style={{ fontSize: "80px" }} />
        </div>
        <p htmlFor="" style={{ marginTop: "10px", fontSize: "15px" }}>
          <strong>Usuarios</strong>
        </p>
      </section>
      <section
        style={{ height: "250px", cursor: "pointer" }}
        onClick={() => navigate("/configuracion/jefes")}
      >
        <div
          style={{
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height: "200px",
            width: "200px",
            backgroundColor: "white",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UserSwitchOutlined style={{ fontSize: "80px" }}  />
        </div>
        <p htmlFor="" style={{ marginTop: "10px", fontSize: "15px" }}>
          {" "}
          <strong>Jefes de Grupo</strong>
        </p>
      </section>
      <section
        style={{ height: "250px", cursor: "pointer" }}
        onClick={() => navigate("/configuracion/inventariadores")}
      >
        <div
          style={{
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height: "200px",
            width: "200px",
            backgroundColor: "white",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UsergroupAddOutlined style={{ fontSize: "80px" }}/>
        </div>
        <p htmlFor="" style={{ marginTop: "10px", fontSize: "15px" }}>
          {" "}
          <strong>Inventariadores</strong>
        </p>
      </section>
      <section
        style={{ height: "250px", cursor: "pointer" }}
        onClick={() => navigate("/configuracion/ubicaciones")}
      >
        <div
          style={{
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height: "200px",
            width: "200px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchOutlined style={{ fontSize: "80px" }} />
        </div>
        <p htmlFor="" style={{ marginTop: "10px", fontSize: "15px" }}>
          {" "}
          <strong>Ubicaciones</strong>
        </p>
      </section>
    </div>
  );
};

export default MenuConfiguracion;
