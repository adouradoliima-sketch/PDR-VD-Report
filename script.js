let relatorios = [];

const foto = document.getElementById("foto");

foto.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function (e) {

        document.getElementById("preview").src = e.target.result;
        document.getElementById("preview").style.display = "block";

    }

    leitor.readAsDataURL(arquivo);

});

function salvarRelatorio() {

    let relatorio = {

        data: document.getElementById("data").value,
        modelo: document.getElementById("modelo").value,
        linha: document.getElementById("linha").value,
        turno: document.getElementById("turno").value,
        defeito: document.getElementById("defeito").value,
        local: document.getElementById("local").value,
        material: document.getElementById("material").value,
        vendor: document.getElementById("vendor").value,
        quantidade: document.getElementById("quantidade").value,
        descricao: document.getElementById("descricao").value,
        containment: document.getElementById("containment").value,
        corrective: document.getElementById("corrective").value,
        responsavel: document.getElementById("responsavel").value,
        foto: document.getElementById("preview").src

    };

    relatorios.push(relatorio);

    mostrarRelatorios();

    limparFormulario();

}

function mostrarRelatorios() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    relatorios.forEach(function (r, i) {

        lista.innerHTML += `

        <div class="card">

            <h3>${r.modelo}</h3>

            <p><b>● Data:</b> ${r.data}</p>

            <p><b>● Linha:</b> ${r.linha}</p>

            <p><b>● Turno:</b> ${r.turno}</p>

            <p><b>● Defeito:</b> ${r.defeito}</p>

            <p><b>● Local:</b> ${r.local}</p>

            <p><b>● Material:</b> ${r.material}</p>

            <p><b>● Fornecedor:</b> ${r.vendor}</p>

            <p><b>● Quantidade:</b> ${r.quantidade}</p>

            <p><b>● Descrição:</b> ${r.descricao}</p>

            <p><b>● Containment Action:</b> ${r.containment}</p>

            <p><b>● Corrective Action:</b> ${r.corrective}</p>

            <p><b>● Responsável:</b> ${r.responsavel}</p>

            ${r.foto ? `<img src="${r.foto}" style="width:100%;margin-top:10px;border-radius:10px;">` : ""}

            <br><br>

            <button onclick="copiarRelatorio(${i})">
                📋 Copiar
            </button>

            <button onclick="excluirRelatorio(${i})"
                style="margin-top:10px;background:#d32f2f;">
                🗑 Excluir
            </button>

        </div>

        `;

    });

}

function limparFormulario() {

    document.getElementById("data").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("linha").value = "";
    document.getElementById("turno").value = "A";
    document.getElementById("defeito").value = "";
    document.getElementById("local").value = "";
    document.getElementById("material").value = "";
    document.getElementById("vendor").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("containment").value = "";
    document.getElementById("corrective").value = "";
    document.getElementById("responsavel").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("preview").src = "";
    document.getElementById("preview").style.display = "none";

}