/**
 * @preserve Copyright (c) 2015 ApptoIX Limited. All rights reserved.
 * @author Alexandre Bento Freire
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the 'Software'),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, white: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({
 'HISTORY_HINT' : 'Use Ctrl+UP/DOWN para usar a histórico',
  'SPACETEXT_HINT' : '  usar \\ $ para espaços finais e iniciais',
  'SHORTCUT_HINT' : 'Ex: Ctrl-Shift-U (vitória). Cmd-Shift-U (mac)',
  'NEED_RESTART_MSG' : 'Só tem efeito após reiniciar!',
  'DEVBY_MSG' : 'Desenvolvido por {0}',
  'EXTRACTOR_MSG' : 'Escreva uma expressão regular <br> Todos os resultados serão copiados para o clipboard <br>',
  'FLD_limaxcharsperline_label' : 'Max caracteres por linha',
  'FLD_limaxcharsperline_hint' : 'Defina 0 para não quebrar automaticamente',
  'FLD_maxcharsperline_label' : 'Max carac. por linha',
  'FLD_maxcharsperline_hint' : 'Min é 1',
  'FLD_tobreakwords_label' : 'Quebrar palavras',
  'FLD_tobreakwords_hint' : 'Ative parar quebrar palavras',
  'FLD_lihtmlparawrap_label' : 'html tag wrap',
  'FLD_lihtmlparawrap_hint' : 'Quebra cada parágrafo com esta tag. Ex: p',
  'FLD_linrparagraphs_label' : 'Nr parágrafos',
  'FLD_linrparagraphs_hint' : 'Máximo é 100',
  'FLD_scss_label' : 'Compilador SCSS',
  'FLD_scss_hint' : 'Você deve instalar sass 1. Ir a http://sass-lang.com/',
  'FLD_scss_compass_label' : 'Compass',
  'FLD_scss_sass_label' : 'SCSS',
  'FLD_scss_autosave_hint' : 'Gravação automática',
  'FLD_js6_label' : 'Compilador js6',
  'FLD_js6_hint' : 'É necessário instalar o NodeJS, e depois "instalar npm -g traceur"',
  'FLD_js6_autosave_hint' : 'Gravação automático',
  'FLD_js_label' : 'Compilador js',
  'FLD_js_hint' : 'É necessário instalar o NodeJS, e depois "instalar npm -g uglify-js"',
  'FLD_splitMarker_label' : 'Marcador de Separação',
  'FLD_historySize_label' : 'Tamanho do Histórico',
  'FLD_recentSize_label' : 'Tamanho dos Ficheiros Recentes',
  'FLD_startNum_label' : 'Valor Inicial',
  'FLD_numSep_label' : 'Separador após Número',
  'FLD_tabSize_label' : 'Tamanho da Tab',
  'FLD_find_label' : 'Procurar',
  'FLD_replace_label' : 'Substituir',
  'FLD_replace_hint' : 'Use #{d}#, #{x}#, #{X}#, #{<valor>d}#, #{0<valor>d}# para a numeração macro',
  'FLD_startValue_label' : 'Inicio',
  'FLD_startValue_hint' : 'Deixe em branco para não numerar, uma vez que atrasa o processo e suporta apenas um pequeno subconjunto de substituição de expressões regulares. Deve ter expressão regular verificado',
  'FLD_stepValue_label' : 'Passo',
  'FLD_iswordsonly_label' : 'Apenas palavras',
  'FLD_iswordsonly_hint' : 'Só funciona se não for uma expressão regular',
  'FLD_isregexpr_label' : 'Expressão Regular',
  'FLD_isignorecase_label' : 'Ignorar Maiúsculas',
  'FLD_isimultiline_label' : 'Multi linha',
  'FLD_isall_label': 'Substituir tudo',
  'FLD_isselonly_label' : 'Seleção apenas',
  'FLD_isselonly_hint' : 'Se houver um texto selecionado apenas substitui o texto selecionado',
  'HDR_options_Field_label': 'Campo',
  'HDR_options_Value_label': 'Valor',
  'HDR_options_ExecOnSave_label': 'Executar quando Guarda',
  'HDR_commandsmapper_Command_label': 'Commndo',
  'HDR_commandsmapper_Hotkey_label': 'Hotkey',
  'HDR_commandsmapper_Show on Menu_label': 'Mostrar no Menu',
  'HDR_commandsmapper_Show on CtxMenu_label': 'Mostrar on Menu Contexto',

  'CAT_General': 'Geral',
  'CAT_Compilers': 'Compiladores',
  'CAT_Shortcuts': 'Atalhos',
  'CAT_BeforeSave': 'Antes de guardar',
  'CAT_Tools': 'Ferramentas',
  'Extensions': 'Extensões',
  'FLD_webSearch_label': 'Url do Engenho de procura',
  'FLD_showcxtedit_label': 'Mostra os comandos de edição no menu de contextual',
  'FLD_Cmdline_label': 'Linha Comando',
  'FLD_Path_label': 'Trilha',
  'FLD_Predefined_label': 'Predefinido',
  'FLD_ShowOutput_label': 'Mostrar Saída',

  'UpperCase' : 'Converter para Maiúsculas',
  'LowerCase' : 'Converter para Minúsculas',
  'Capitalize' : 'Capitalizar',
  'HtmlEncode' : 'Codificar Html',
  'HtmlDecode' : 'Decodificar Html',
  'UrlEncode' : 'Codificar Url',
  'Join' : 'Juntar',
  'Split' : 'Separar',
  'Number' : 'Numerar',
  'Reverse' : 'Inverso',
  'Trim Leading' : 'Apagar os espaços iniciais',
  'Trim Trailing' : 'Apagar os espaços finais',
  'Markdown Trim Trailing' : 'Apagar os espaços finais (Markdown)',
  'Sort Ascending' : 'Ordenar por ordem crescente',
  'Sort Descending' : 'Ordenar por ordem decrescente',
  'Remove Duplicates' : 'Remover duplicados',
  'Remove Empty Lines' : 'Remover linhas vazias',
  'Unix To Win' : 'Unix para Win (Separador)',
  'Win To Unix' : 'Win Para Unix (Separador)',
  'Single Slash To Double' : 'Separador simples para duplo',
  'Double To Single Slash' : 'Separador duplo para simples',
  'Single Quote To Double' : 'Aspas simples para duplas',
  'Double To Single Quote' : 'Aspas duplas para simples',
  'Toggle Quote' : 'Alternar Aspas',
  'Tab To Space' : 'Converter Tab para Espaço',
  'Space To Tab' : 'Converter Espaço Para Tab',
  'Untag' : 'Retirar etiqueta',
  'Tag' : 'Etiquetar',
  'Break Line At' : 'Dividir linhas longas',
  'Function JSDoc' : 'Adicionar função JSDoc',
  'Declare JSLint Global' : 'Declarar JSLint global',
  'Extractor' : 'Extrator',
  'Replace' : 'Substituir',
  'Open Url' : 'Abrir Url',
  'Web Search' : 'Pesquisar na Web',
  'Browse File' : 'Explorar ficheiro',
  'Recent Files' : 'Ficheiros recentes',
  'Copy Filename' : 'Copiar nome do ficheiro',
  'Copy Fullname' : 'Copiar nome do ficheiro completo',
  'Html Report' : 'Relatório html',
  'Regex Tester' : 'regex Testador',
  'Compiler' : 'Compilador(js6, scss)',
  'Commands' : 'Comandos',
  'Commands Mapper' : 'Mapeador de Comandos',
  'Options' : 'Opções',

  'Execute': 'Executar'
});