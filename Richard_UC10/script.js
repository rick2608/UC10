const S = (c) => `<g>${c}</g>`;
const CH = {
    byte: `<rect x='22' y='72' width='7' height='26' fill='#1e1b4b'/><rect x='31' y='72' width='7' height='26' fill='#1e1b4b'/><rect x='16' y='36' width='28' height='38' rx='6' fill='#2563eb'/><path d='M30 38v32' stroke='#39ff88' stroke-width='2'/><circle cx='30' cy='22' r='13' fill='#f1c9a5'/><path d='M16 20Q18 3 32 7Q46 5 44 20Q36 11 16 20Z' fill='#1a1a2e'/><rect x='19' y='19' width='22' height='6' rx='3' fill='#22d3ee'/>`,
    firewall: `<rect x='20' y='72' width='8' height='26' fill='#334155'/><rect x='32' y='72' width='8' height='26' fill='#334155'/><rect x='13' y='34' width='34' height='40' rx='6' fill='#64748b'/><rect x='13' y='34' width='34' height='8' fill='#22d3ee'/><circle cx='30' cy='22' r='13' fill='#94a3b8'/><rect x='20' y='18' width='20' height='7' rx='3' fill='#0ea5e9'/><path d='M-6 40h20v26q-10 12-20 0z' fill='#22d3ee' stroke='#e0faff' stroke-width='2'/>`,
    bug: `<path d='M10 50L22 22L38 28L52 14L56 50L46 76L30 70L14 80Z' fill='#7a1d5e'/><rect x='12' y='30' width='10' height='8' fill='#ff3b5c'/><rect x='40' y='54' width='12' height='8' fill='#39ff88'/><rect x='26' y='56' width='8' height='8' fill='#22d3ee'/><circle cx='26' cy='38' r='5' fill='#ff3b5c'/><circle cx='40' cy='40' r='5' fill='#ff3b5c'/><rect x='24' y='36' width='4' height='4' fill='#000'/><rect x='38' y='38' width='4' height='4' fill='#000'/><path d='M22 50l8 6l8-6l8 8' stroke='#000' stroke-width='3' fill='none'/><rect x='6' y='78' width='10' height='6' fill='#ff3b5c'/><rect x='44' y='84' width='12' height='6' fill='#7a1d5e'/>`,
    loop: `<rect x='21' y='72' width='7' height='26' fill='#14532d'/><rect x='32' y='72' width='7' height='26' fill='#14532d'/><rect x='15' y='36' width='30' height='38' rx='6' fill='#16a34a'/><circle cx='30' cy='56' r='8' fill='none' stroke='#39ff88' stroke-width='3'/><path d='M30 48l4 3l-4 3' fill='#39ff88'/><circle cx='30' cy='22' r='13' fill='#e0b48c'/><path d='M16 18Q30 0 44 18Z' fill='#39ff88'/><circle cx='56' cy='62' r='6' fill='#a7f3d0'/><rect x='51' y='68' width='10' height='8' fill='#16a34a'/>`,
    nuvem: `<path d='M14 40h32l6 58H8z' fill='#38bdf8' opacity='.8'/><path d='M12 18Q8 50 14 60L22 34Z' fill='#60a5fa'/><path d='M48 18Q52 50 46 60L38 34Z' fill='#60a5fa'/><circle cx='30' cy='22' r='13' fill='#f1c9a5'/><path d='M14 22Q14 4 30 6Q46 4 46 22Q38 10 14 22Z' fill='#60a5fa'/><rect x='20' y='20' width='20' height='5' rx='2' fill='#c4b5fd'/><rect x='46' y='50' width='10' height='14' rx='2' fill='#22d3ee'/>`,
    ia: `<rect x='21' y='72' width='7' height='26' fill='#cbd5e1'/><rect x='32' y='72' width='7' height='26' fill='#cbd5e1'/><rect x='15' y='36' width='30' height='38' rx='6' fill='#e2e8f0'/><rect x='24' y='46' width='12' height='10' fill='#7c3aed'/><circle cx='30' cy='22' r='13' fill='#f1f5f9'/><circle cx='25' cy='21' r='4' fill='#a855f7'/><circle cx='36' cy='21' r='4' fill='#a855f7'/><path d='M17 14Q30 0 43 14' stroke='#94a3b8' stroke-width='4' fill='none'/>`
};
const SC = { city: ['#0b1030', '#3b1d7a'], alert: ['#1a0a1f', '#8a1d3b'], lab: ['#06142b', '#0e4a6b'], arena: ['#0b1030', '#1d3b7a'], fac: ['#0a1a1a', '#1d5a4a'], bridge: ['#0b1030', '#4a1d7a'], hall: ['#120a2e', '#2d1d7a'] };
let gid = 0;
function scene(t) {
    const [a, b] = SC[t], id = 'g' + (++gid); let s = `<svg viewBox='0 0 300 170' preserveAspectRatio='xMidYMid slice'><defs><linearGradient id='${id}' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='300' height='170' fill='url(#${id})'/>`;
    for (let i = 0; i < 10; i++) { const h = (i * 37) % 60 + 40, x = i * 30; s += `<rect x='${x}' y='${150 - h}' width='26' height='${h}' fill='#120c3a' stroke='#7c3aed' stroke-width='1'/>`; for (let j = 0; j < h / 14; j++)s += `<rect x='${x + 6}' y='${156 - h + j * 14}' width='5' height='5' fill='${t == "alert" && (i + j) % 3 == 0 ? "#ff3b5c" : "#39ff88"}'/>` }
    if (t == "bridge") s += `<path d='M0 120Q150 40 300 120' stroke='#39ff88' stroke-width='5' fill='none'/><path d='M0 126h300' stroke='#22d3ee' stroke-width='6'/>`;
    if (t == "fac") for (let i = 0; i < 3; i++)s += `<rect x='${20 + i * 95}' y='80' width='70' height='60' fill='#1f3a37' stroke='#39ff88' stroke-width='2'/><circle cx='${55 + i * 95}' cy='105' r='14' fill='none' stroke='#39ff88' stroke-width='4' stroke-dasharray='6 4'/>`;
    if (t == "lab") for (let i = 0; i < 3; i++)s += `<rect x='${15 + i * 95}' y='70' width='80' height='50' fill='#031a2e' stroke='#22d3ee' stroke-width='3'/><path d='M${25 + i * 95} 100l12-14l12 8l14-18' stroke='#39ff88' stroke-width='3' fill='none'/>`;
    if (t == "arena") s += `<rect x='148' y='0' width='4' height='170' fill='#39ff88'/><rect x='0' y='140' width='150' height='30' fill='#2a1d6a'/><rect x='150' y='140' width='150' height='30' fill='#0e4a3a'/>`;
    if (t == "hall") for (let i = 0; i < 4; i++)s += `<rect x='${10 + i * 72}' y='40' width='60' height='60' rx='4' fill='#7c3aed33' stroke='#22d3ee' stroke-width='2'/><rect x='${22 + i * 72}' y='54' width='36' height='6' fill='#39ff88'/><rect x='${22 + i * 72}' y='68' width='26' height='6' fill='#22d3ee'/>`;
    if (t == "alert") s += `<rect x='30' y='20' width='60' height='6' fill='#ff3b5c'/><rect x='200' y='60' width='70' height='5' fill='#39ff88'/><rect x='110' y='100' width='50' height='6' fill='#ff3b5c'/>`;
    s += `<rect x='0' y='150' width='300' height='20' fill='#050414'/><path d='M0 152h300' stroke='#22d3ee' stroke-width='2'/>`;
    return s;
}
const P = (w, r, t, ch, bl, code) => ({ w, r, t, ch, bl, code });

const PG = [
    ['Página 1 — O colapso de Cybernexus', [
        P(6, 1, 'city', '', []),
        P(2, 1, 'lab', 'byte:120:40:1.3', [
            [8, 6, 'l', 80, 'Vamos lá, Byte! O sistema de cadastro e pedidos está pronto. Agora vamos testá-lo!']
        ]),
        P(2, 1, 'alert', 'byte:60:50:1.2 bug:200:30:1.4', [
            [2, 4, 'r', 44, 'Funcionou! O cadastro foi realizado e o pedido foi enviado corretamente!'],
            [50, 4, 'l', 44, 'Você verificou uma situação e achou que todas as outras também funcionariam!']
        ]),
        P(2, 1, 'alert', 'firewall:190:40:1.3 byte:70:50:1.2', [
            [6, 4, 'd', 88, 'Um software precisa ser verificado em diferentes situações. É para isso que existem os testes de software!']
        ]),
        P(6, 1, 'alert', 'byte:130:40:1.3 bug:230:40:1.2', [])
    ]],

    ['Página 2 — A importância dos testes', [
        P(3, 1, 'alert', 'byte:90:45:1.2 firewall:190:40:1.3', [
            [2, 4, 'l', 46, 'Como vamos descobrir se todos os distritos estão funcionando corretamente?'],
            [52, 4, 'r', 46, 'Precisamos testar o sistema para encontrar defeitos antes que afetem os usuários!']
        ]),
        P(3, 1, 'bridge', 'firewall:60:40:1.3', [
            [4, 6, 'l', 90, 'Exatamente! Os testes reduzem riscos, identificam falhas e aumentam a confiança na aplicação.']
        ]),
        P(2, 1, 'city', 'byte:120:45:1.3', [
            [8, 6, 'l', 80, 'Entendi! É melhor encontrar um erro durante o desenvolvimento do que depois que o sistema estiver em uso!']
        ]),
        P(4, 1, 'hall', 'firewall:60:40:1.3 byte:200:45:1.3', [
            [4, 3, 'l', 29, 'Os testes ajudam a melhorar a qualidade do sistema!'],
            [67, 3, 'r', 29, 'Isso mesmo!']
        ])
    ]],

    ['Página 3 — A arena dos testes manuais e automatizados', [
        P(6, 1, 'arena', 'byte:50:40:1.3 loop:200:40:1.3', [
            [4, 4, 'l', 42, 'Vou verificar cada máquina pessoalmente para descobrir se está funcionando!'],
            [54, 4, 'r', 42, 'Enquanto você verifica manualmente, meus robôs podem repetir testes automaticamente!']
        ]),
        P(3, 1, 'lab', 'byte:100:40:1.4', [
            [8, 4, 'd', 84, 'Preenchi os dados, cliquei em salvar e conferi o resultado. Esse é um teste manual!']
        ]),
        P(3, 1, 'arena', 'loop:200:40:1.3 loop:60:80:.6', [
            [10, 4, 'r', 80, 'Os testes automatizados repetem verificações com rapidez!']
        ]),
        P(6, 1, 'arena', 'byte:70:40:1.3 loop:210:40:1.3', [
            [8, 4, 'l', 42, 'Então os testes manuais ajudam a observar detalhes!'],
            [54, 4, 'r', 42, 'Isso mesmo! Os dois são importantes e se complementam.']
        ])
    ]],

    ['Página 4 — Testes unitários', [
        P(3, 1, 'fac', 'byte:90:40:1.3 bug:210:30:1.2', [
            [4, 4, 'l', 42, 'Bug alterou esta máquina de calcular preços. Vou verificar se ela funciona sozinha!']
        ]),
        P(3, 1, 'fac', 'byte:60:40:1.3 firewall:200:40:1.3', [
            [4, 4, 'r', 90, 'Isso é um teste unitário! Ele verifica uma pequena parte do código, como uma função, isoladamente.']
        ]),
        P(3, 2, 'lab', '', [], `<h4>app.py</h4><pre>def calcular_total(preco, quantidade):
    return preco * quantidade</pre><h4 style="margin-top:12px">test_app.py</h4><pre>from app import calcular_total

def test_calcular_total():
    assert calcular_total(10, 3) == 30</pre>`),
        P(3, 1, 'lab', '', [], `<h4>terminal</h4><pre>$ python -m pytest -v
test_app.py::test_calcular_total <span class="ok">PASSED</span>
<span class="ok">1 passed</span></pre>`),
        P(3, 1, 'fac', 'byte:90:40:1.3 ia:210:40:1.3', [
            [4, 4, 'r', 42, 'Teste aprovado! A função apresentou o resultado esperado para essa situação!'],
            [52, 4, 'l', 42, 'Vamos executar o teste para verificar se a função retorna esse valor.']
        ])
    ]],

    ['Página 5 — Preparando o ambiente', [
        P(3, 1, 'lab', 'byte:110:40:1.3', [
            [4, 4, 'd', 88, 'Para executar meus testes, preciso preparar o ambiente de desenvolvimento!']
        ]),
        P(3, 1, 'lab', '', [], `<h4>etapas</h4><pre>1. Instalar o Python
2. Instalar o VS Code + extensão Python
3. Criar a pasta do projeto e abrir no editor
4. Criar o ambiente virtual
5. Ativar o ambiente virtual
6. Instalar pytest
7. Criar app.py e test_app.py
8. Executar os testes</pre>`),
        P(3, 1, 'lab', '', [], `<h4>criar o ambiente virtual</h4><pre>python -m venv .venv</pre><h4 style="margin-top:8px">ativar (PowerShell)</h4><pre>.venv\\Scripts\\Activate.ps1</pre>`),
        P(3, 1, 'lab', '', [], `<h4>instalar pytest</h4><pre>python -m pip install pytest</pre><h4 style="margin-top:8px">executar os testes</h4><pre>python -m pytest -v</pre>`),
        P(6, 1, 'lab', 'byte:130:40:1.3', [
            [4, 4, 'l', 88, 'Pronto! Agora posso executar os testes pelo terminal e conferir os resultados!']
        ])
    ]],

    ['Página 6 — Testes de integração', [
        P(3, 1, 'bridge', 'nuvem:90:40:1.3 byte:200:45:1.3', [
            [4, 4, 'd', 88, 'Os distritos funcionam separadamente, mas os dados não estão chegando ao destino!']
        ]),
        P(3, 1, 'alert', 'bug:200:35:1.3 nuvem:60:40:1.2', [
            [4, 4, 'r', 88, 'Então o problema pode estar na comunicação entre os componentes? Exatamente! Precisamos verificar se eles trabalham corretamente em conjunto.']
        ]),
        P(3, 2, 'bridge', '', [], `<h4>app.py</h4><pre>def salvar_usuario(usuario, repositorio):
    return repositorio.salvar(usuario)</pre><h4 style="margin-top:8px">test_integracao.py</h4><pre>from app import salvar_usuario

class RepositorioFake:
    def __init__(self):
        self.usuarios = []

    def salvar(self, usuario):
        self.usuarios.append(usuario)
        return usuario

def test_salvar_usuario():
    repositorio = RepositorioFake()
    usuario = {"nome": "Ana"}

    resultado = salvar_usuario(usuario, repositorio)

    assert resultado == usuario
    assert repositorio.usuarios == [usuario]</pre>`),
        P(3, 1, 'bridge', 'nuvem:80:40:1.3 byte:200:45:1.3', [
            [4, 4, 'd', 88, 'O teste verificou se o cadastro e o repositório trabalham corretamente em conjunto! Usamos um repositório simulado, não um banco de dados real.']
        ])
    ]],

    ['Página 7 — O arsenal de ferramentas', [
        P(6, 1, 'hall', 'ia:120:40:1.3 byte:200:45:1.3', [
            [4, 2, 'd', 88, 'Cada linguagem possui ferramentas que ajudam a criar e executar testes!']
        ]),
        P(3, 1, 'hall', '', [], `<h4>Python</h4><pre>pytest · unittest</pre><h4 style="margin-top:8px">JavaScript</h4><pre>Jest · Vitest</pre>`),
        P(3, 1, 'hall', '', [], `<h4>Java</h4><pre>JUnit</pre><h4 style="margin-top:8px">C#</h4><pre>xUnit · NUnit</pre>`),
        P(6, 1, 'hall', 'ia:70:40:1.3 byte:220:45:1.3', [
            [4, 4, 'l', 29, 'Então escolhemos as ferramentas de acordo com a linguagem e as necessidades do projeto!'],
            [67, 4, 'r', 29, 'Exatamente! Não precisamos utilizar todas ao mesmo tempo.']
        ])
    ]],

    ['Página 8 — A batalha contra Bug', [
        P(6, 1, 'alert', 'bug:130:30:1.5', [
            [4, 4, 'r', 88, 'Alterei uma pequena parte do código! Agora vamos ver o que acontece com o restante da cidade!']
        ]),
        P(2, 1, 'fac', 'byte:110:45:1.3', [
            [4, 4, 'd', 88, 'Vou executar os testes unitários para descobrir se alguma função foi prejudicada!']
        ]),
        P(2, 1, 'arena', 'loop:110:45:1.3', [
            [4, 4, 'd', 88, 'Vou repetir os testes automatizados para verificar se a alteração provocou novas falhas!']
        ]),
        P(2, 1, 'bridge', 'nuvem:110:45:1.3', [
            [4, 4, 'd', 88, 'Também precisamos verificar se os componentes continuam trocando informações corretamente!']
        ]),
        P(3, 1, 'hall', 'ia:110:45:1.3', [
            [4, 4, 'd', 88, 'Encontrei uma falha nos resultados! Vamos investigar a causa e corrigir o código.']
        ]),
        P(3, 1, 'alert', 'firewall:80:40:1.3 bug:210:40:1.2', [
            [4, 4, 'l', 88, 'Corrigimos o problema! Agora vamos executar os testes novamente para confirmar o resultado.']
        ]),
        P(6, 1, 'city', 'byte:60:50:1.2 firewall:120:45:1.3 loop:190:50:1.2', [
            [4, 4, 'd', 42, 'Os testes ajudaram a encontrar e corrigir a falha!'],
            [54, 4, 'd', 42, 'Vamos confirmar que tudo voltou a funcionar!']
        ])
    ]],

    ['Página 9 — Uma cidade em constante evolução', [
        P(6, 1, 'city', '', []),
        P(6, 1, 'hall', 'byte:20:40:1.3 firewall:75:40:1.3 loop:130:40:1.3 nuvem:185:40:1.3 ia:240:40:1.3', [
            [1, 4, 'd', 22, 'Conseguimos! Cybernexus voltou a funcionar corretamente!'],
            [25, 4, 'd', 22, 'Os testes automatizados permitem repetir verificações após cada alteração!'],
            [50, 4, 'd', 22, 'Os testes de integração verificam se os componentes trabalham juntos!'],
            [75, 4, 'd', 22, 'Testar não elimina todos os erros, mas ajuda a criar sistemas confiáveis!']
        ])
    ]]
];


document.getElementById('m').innerHTML = PG.map(([t, ps]) =>
    `<section class="page">
        <h2 class="pt">${t}</h2>
        <div class="grid">` +
    ps.map(p => {
        const st = `grid-column:span ${p.w};grid-row:span ${p.r}`;

        if (p.code) {
            return `<div class="p code" style="${st}">${p.code}</div>`;
        }

        let s = scene(p.t);

        if (p.ch) {
            p.ch.split(' ').forEach(c => {
                const [id, x, y, k] = c.split(':');
                s += `<g transform="translate(${x},${y}) scale(${k})">${CH[id]}</g>`;
            });
        }

        s += '</svg>';

        return `<div class="p" style="${st}">` +
            s +
            p.bl.map(([x, y, d, w, fala]) =>
                `<div class="b ${d}" style="
                        left:${x}%;
                        top:${y}%;
                        width:${w || 36}%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        text-align:center;
                        box-sizing:border-box;
                        padding:8px;
                        font-size:clamp(9px, 1vw, 14px);
                        line-height:1.15;
                        overflow-wrap:anywhere;
                        color:#111;
                        z-index:5;
                    ">${fala || ''}</div>`
            ).join('') +
            `</div>`;
    }).join('') +
    `</div>
    </section>`
).join('');


