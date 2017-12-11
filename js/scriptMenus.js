//Menu 1
function cambioDescPrepaEnLinea()
{
    cambioAzul1();
    cambioRojo(document.getElementById("PrepaLP"), document.getElementById("PrepaLD"));
    document.getElementById("col2-1").innerHTML="Es un proyecto público, flexible y completamente gratuito que se imparte en todo México. Puedes acceder a su plataforma de estudio las 24 horas del día, lo cual te permite elegir un horario adecuado para ti.";
}

function cambioDescBachTec()
{
    cambioAzul1();
    cambioRojo(document.getElementById("BachTecP"), document.getElementById("BachTecD"));
    document.getElementById("col2-1").innerHTML="Además de recibir tu certificado de bachillerato, puedes obtener un título técnico en alguna de las especialidades que se ofrecen. Sus programas son de la misma calidad y reconocimiento que los presenciales.";
}

function cambioDescBUNAM()
{
    cambioAzul1();
    cambioRojo(document.getElementById("BUNAMP"), document.getElementById("BUNAMD"));
    document.getElementById("col2-1").innerHTML="Si vives fuera de México, esta plataforma es ideal para ti. Con ella puedes cursar y terminar tus estudios con un programa completo y actualizado, aprovechando al máximo la modalidad en línea.";
}

function cambioDescBachGral()
{
    cambioAzul1();
    cambioRojo(document.getElementById("BachGralP"), document.getElementById("BachGralD"));
    document.getElementById("col2-1").innerHTML="Este modelo abarca distintas especializaciones y cuenta con un enfoque formativo basado en competencias, enriquecido por las tecnologías de la información y la comunicación. Además, te permite gestionar el reconocimiento de certificados en Estados Unidos.";
}

function cambioDescUnivVirtual()
{
    cambioAzul1();
    cambioRojo(document.getElementById("UnivVirtualP"), document.getElementById("UnivVirtualD"));
    document.getElementById("col2-1").innerHTML="Este bachillerato te ofrece un modelo educativo flexible y en línea a bajo costo. Cuenta con una preparación científico-humanista que brinda capacidades para seguir aprendiendo y mejorar tus condiciones de trabajo.";
}

function cambioAzul1()
{
    document.getElementById("PrepaLP").style.borderColor="#1F7773";
    document.getElementById("PrepaLD").style.backgroundColor="#3EC8C0";

    document.getElementById("BachTecP").style.borderColor="#1F7773";
    document.getElementById("BachTecD").style.backgroundColor="#3EC8C0";

    document.getElementById("BUNAMP").style.borderColor="#1F7773";
    document.getElementById("BUNAMD").style.backgroundColor="#3EC8C0";

    document.getElementById("BachGralP").style.borderColor="#1F7773";
    document.getElementById("BachGralD").style.backgroundColor="#3EC8C0";

    document.getElementById("UnivVirtualP").style.borderColor="#1F7773";
    document.getElementById("UnivVirtualD").style.backgroundColor="#3EC8C0";
}

function cambioRojo(elementoP, elementoD)
{
    elementoP.style.borderColor="#CC2521";
    elementoD.style.backgroundColor="#E35E5E";
}

// Menu 2
function cambioDescUADM()
{
    cambioAzul2();
    cambioRojo(document.getElementById("UADMP"), document.getElementById("UADMD"));
    document.getElementById("col2-2").innerHTML="Esta universidad es una opción educativa de calidad, totalmente a distancia y gratuita. Ofrece servicios como becas y acceso a una enorme cantidad de recursos digitales, además de encontrarse disponible para la población mexicana en el extranjero.";
}

function cambioDescPoliV()
{
    cambioAzul2();
    cambioRojo(document.getElementById("PoliVP"), document.getElementById("PoliVD"));
    document.getElementById("col2-2").innerHTML="Sus modalidades a distancia y mixta para el nivel superior te permiten elegir las unidades de aprendizaje que requieres para cada periodo escolar, además de desarrollar habilidades de comunicación y autogestión.";
}

function cambioDescCUAED()
{
    cambioAzul2();
    cambioRojo(document.getElementById("CUAEDP"), document.getElementById("CUAEDD"));
    document.getElementById("col2-2").innerHTML="Aquí se maneja toda el área de educación abierta y a distancia de la UNAM, donde se imparten las licenciaturas en plataformas virtuales. Cuenta con más de 40 años de experiencia.";
}

function cambioDescUDGV()
{
    cambioAzul2();
    cambioRojo(document.getElementById("UDGVP"), document.getElementById("UDGVD"));
    document.getElementById("col2-2").innerHTML="Esta universidad cuenta con una de las comunidades académicas más distinguidas de México. Su propuesta virtual educativa se centra en tus necesidades para que completes tu carrera de forma satisfactoria.";
}

function cambioDescUVEG()
{
    cambioAzul2();
    cambioRojo(document.getElementById("UVEGP"), document.getElementById("UVEGD"));
    document.getElementById("col2-2").innerHTML="Fue creada por el Gobierno Estatal de Guanajuato. Su modelo educativo promueve que la comunidad estudiantil identifique su mejor forma de aprendizaje para lograr construir su propio conocimiento.";
}

function cambioAzul2()
{
    document.getElementById("UADMP").style.borderColor="#1F7773";
    document.getElementById("UADMD").style.backgroundColor="#3EC8C0";

    document.getElementById("PoliVP").style.borderColor="#1F7773";
    document.getElementById("PoliVD").style.backgroundColor="#3EC8C0";

    document.getElementById("CUAEDP").style.borderColor="#1F7773";
    document.getElementById("CUAEDD").style.backgroundColor="#3EC8C0";

    document.getElementById("UDGVP").style.borderColor="#1F7773";
    document.getElementById("UDGVD").style.backgroundColor="#3EC8C0";

    document.getElementById("UVEGP").style.borderColor="#1F7773";
    document.getElementById("UVEGD").style.backgroundColor="#3EC8C0";
}

function cambioRojo(elementoP, elementoD)
{
    elementoP.style.borderColor="#CC2521";
    elementoD.style.backgroundColor="#E35E5E";
}