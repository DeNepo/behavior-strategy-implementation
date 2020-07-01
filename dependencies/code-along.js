const codeAlongGuide = {
  "evaluate code": `will run the code in the current editor:
    ... captures console.asserts to display pass/fail
    ... captures console.logs for debugging
    ... tries to stop your code after 1000+ loop iterations
    ... generates a search link for any errors
    ... indicate if errors were Creation or Execution phase`,
  "step through in debugger": `will insert a debugger statement before the first line, and run your code (your devtools should be open for this)`,
  "with max iterations": `trys to insert an infinite loop detector at every loop, then runs your code in the debugger (your devtools should be open for this)`,
  "Open In Js Tutor": `opens the current code in JS Tutor`,
  "First Syntax Error": `identifies the first syntax error in your code`,
  "Format Code": `will make code in the current editor prettier`,
  "Open In JSHint": `opens your code in an online Linter`,
};

// - your code will be colored for easy reading
// - ctr-z will undo changes you made
// - ctr-shift-z will redo the changes
// - ctr-c will copy any highlighted text
// - ctr-v will paste the copied text
// - icons to the right of your code help with errors & syntax
// - changes ARE NOT saved when you refresh the web page
// - changes ARE saved when switching between exercises

async function codeAlong(config) {

  const container = (() => {
    if (!config) {
      return document.createElement('div');

    } if (config instanceof Element) {
      return config;

    } else if (typeof config === 'string') {
      return document.getElementById(config);

    } else if (!config.container) {
      return document.createElement('div');

    } else if (config.container instanceof Element) {
      return config.container;

    } else if (typeof config.container === 'string') {
      return document.getElementById(config.container);

    } else {
      throw new Error('unknown container');
    }
  })();


  const steps = [];

  const iframe = codeAlong.createIframe(config);

  const loadButton = document.createElement('button');
  loadButton.innerHTML = 'click to load code-along';
  loadButton.onclick = async () => {
    iframe.contentDocument.body.style = '';
    iframe.contentDocument.body.innerHTML = '';
    try {
      await new Promise((resolve, reject) => {
        const aceScript = document.createElement('script');
        aceScript.src = (config.relativity || "../") + "dependencies/ace/ace.js";
        aceScript.type = "text/javascript";
        aceScript.charset = "utf-8";

        aceScript.addEventListener('load', () => {
          resolve();
          codeAlong.theRest(config, steps, iframe);
        });
        aceScript.addEventListener('error', (e) => reject(e.message))

        iframe.contentDocument.head.appendChild(aceScript);
      });
    } catch (err) {
      console.error(err);
      const error = document.createElement('code');
      error.innerHTML = 'could not reach internet or liveServer, unable to load code-along';
      error.style = 'position:absolute; position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align: center;';
      iframe.contentDocument.body.appendChild(error);
    };
  }

  const tempHeader = document.createElement('h1');
  tempHeader.innerHTML = config.title ? config.title : '';
  iframe.onload = () => {
    iframe.contentDocument.body.style = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;';
    iframe.contentDocument.body.appendChild(tempHeader);
    iframe.contentDocument.body.appendChild(loadButton);
  }

  container.appendChild(iframe);

  // hack
  if (config.preLoad) {
    loadButton.dispatchEvent(new Event('click'))
  }

  return { steps, container };

}

codeAlong.createIframe = () => {

  const iframe = document.createElement('iframe');
  iframe.style = 'height:93vh;width:100%;overflow:hidden;background-color:white;';
  iframe.setAttribute('scrolling', 'no');
  return iframe;

}

codeAlong.theRest = async (config, steps, iframe) => {
  const builtSteps = await (async () => {
    if (!config || !config.source) return [];

    const fetchSource = async path => {
      try {
        const res = await fetch(path);
        const code = res.text();
        return code;
      } catch (err) {
        return err.name + ": " + err.message;
      }
    }

    if (typeof config.source === 'string') {
      const code = await fetchSource(config.source);
      return [{
        code,
        path: config.source,
        name: config.name || 'code-along'
      }];
    } else if (Array.isArray(config.source)) {
      const fetched = config.source
        .map((path, ind) => {
          if (typeof path === 'string') {
            return {
              path,
              code: fetchSource(path),
              name: 'step ' + ind
            }
          } else if (path.constructor.name === "Object") {
            return {
              path,
              code: fetchSource(path.path),
              name: path.name || path.title || 'step ' + ind
            }
          } else {
            throw new Error('invalid step');
          }
        })
      for (let step of fetched) {
        step.code = await step.code;
      }
      return fetched;
    }
  })();

  builtSteps.forEach(step => steps.push(step));


  // async total side-effect
  if (config.type.toLowerCase() === 'document' || config.type.toLowerCase() === 'html' || config.type.toLowerCase() === 'dom') {
    codeAlong.document(iframe, steps, config);
  } else if (config.type.toLowerCase() === 'js' || config.type.toLowerCase() === 'javascript') {
    config.type = 'js';
    codeAlong.js(iframe, steps, config);
  } else {
    codeAlong.js(iframe, steps, config);
  }

  // const setup = await codeAlong.setup(steps, config);
  // container.appendChild(setup);
}


codeAlong.document = (iframe, steps, config) => {
  const title = config.title;

  const stepsContainer = document.createElement('div');

  const editorContainer = document.createElement('div');
  editorContainer.style = 'height:98vh;width:55vw;';

  const ace = iframe.contentWindow.ace;
  // ace.require("ace/ext/language_tools"); // for code_lens eventually
  const editor = ace.edit(editorContainer);
  editor.setTheme('ace/theme/chrome');
  editor.setFontSize(12);
  editor.getSession().setMode('ace/mode/html');
  editor.getSession().setTabSize(2);

  if (steps.length === 0) {
    const defaultCode = (config.type === 'js' || config.type === 'javascript')
      ? "// https://developer.mozilla.org/en-US/docs/Web/API/Console/assert\n" +
      "console.assert(true, 'passing assert');\n" +
      "console.assert(false, 'failing assert');\n" +
      "\n// psst. Open your console for logging!"
      : config.type === 'document'
        ? `<!DOCTYPE html>
<html>

<head>
  <meta charset='utf-8'>
  <title>code-along</title>
</head>

<body></body>

</html>
`
        : (config.type === 'md' || config.type === 'markdown')
          ? '# hi!'
          : '';
    steps.push({
      code: defaultCode,
      name: 'default'
    })
  };

  steps.forEach(step => {
    step.session = ace.createEditSession(step.code, 'html');
    step.session.setMode('ace/mode/html');
  });

  if (steps.length > 1) {
    editorContainer.style = 'height:92vh;width:55vw;';
    const stepButtons = steps.map((step, index) => {
      const button = document.createElement('button');
      button.style.height = '5%'; // provisoire
      button.style.background = '';
      const name = step.name ? step.name : 'step ' + index;
      button.innerHTML = name;
      button.onclick = () => {

        active = step;
        stepButtons.forEach(stepButton => {
          stepButton.style.background = '';
        })
        button.style.background = 'darkgrey';

        editor.setSession(step.session);
        outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(editor.getValue());

      }
      step.button = button;
      return button;
    });

    const buttonsContainer = steps
      .reduce((div, step) => {
        div.appendChild(step.button);
        return div;
      }, document.createElement('div'));
    stepsContainer.appendChild(buttonsContainer);

    steps[0].button.style.background = 'darkgrey';
  }

  stepsContainer.appendChild(editorContainer);

  editor.setSession(steps[0].session);
  editor.setValue(steps[0].code);

  const hixieButton = document.createElement('button');
  hixieButton.innerHTML = 'study in Live DOM Viewer';
  hixieButton.onclick = () => {
    const encodedHTML = encodeURIComponent(editor.getValue());
    const url = "https://software.hixie.ch/utilities/js/live-dom-viewer/?" + encodedHTML;
    window.open(url, "_blank");
  };

  const newTabButton = document.createElement('button');
  newTabButton.innerHTML = 'inspect/debug in new tab';
  newTabButton.onclick = () => {
    const x = window.open();
    x.document.open();
    x.document.write(editor.getValue());
    x.document.close();
  }


  const buttonDiv = document.createElement('div');
  buttonDiv.style = 'margin-top:2%;margin-bottom:2%;text-align:center;';
  buttonDiv.appendChild(newTabButton);
  buttonDiv.appendChild(hixieButton);


  const outputEl = document.createElement('iframe');
  // can do better than this
  config.title
    ? outputEl.style = "width:100%;height:85%;"
    : outputEl.style = "width:100%;height:90%;";
  outputEl.id = '\n-- study: rendered DOM --\n';
  outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(steps[0].code);

  const outputContainer = document.createElement('div');
  outputContainer.style = 'height: 98vh; width: 45vw; border:solid 1px; padding-left:1%; padding-right:1%;';
  if (typeof title === 'string') {
    const titleEl = document.createElement('h1');
    titleEl.innerHTML = title;
    titleEl.style = 'text-align: center; margin-bottom:0%; margin-top:1%;';
    outputContainer.appendChild(titleEl);
  }
  outputContainer.appendChild(buttonDiv);
  outputContainer.appendChild(outputEl);

  editor.on("change", (e) => {
    outputEl.src = "data:text/html;charset=utf-8," + encodeURIComponent(editor.getValue());
  });


  iframe.contentDocument.body.style = 'display:flex; flex-direction:row;';
  iframe.contentDocument.body.appendChild(stepsContainer);
  iframe.contentDocument.body.appendChild(outputContainer);

}

codeAlong.md = (iframe, steps, config) => {

  const loadingMdStyles = new Promise((resolve, reject) => {
    const ghMdStyle = document.createElement('link');
    ghMdStyle.type = 'text/css';
    ghMdStyle.setAttribute('rel', 'stylesheet');
    ghMdStyle.setAttribute('href', (config.relativity || "../") + 'dependencies/github-markdown.css');

    ghMdStyle.addEventListener('load', () => resolve());
    ghMdStyle.addEventListener('error', (e) => reject(e.message))

    frameDocument.head.appendChild(ghMdStyle);
  });

  const loadingMarked = new Promise((resolve, reject) => {
    const markedScript = document.createElement('script');
    markedScript.src = (config.relativity || "../") + "dependencies/marked.js";
    markedScript.type = "text/javascript";
    markedScript.charset = "utf-8";

    markedScript.addEventListener('load', () => resolve());
    markedScript.addEventListener('error', (e) => reject(e.message))

    frameDocument.head.appendChild(markedScript);
  });

}

codeAlong.openIn = {
  jstutor: (editor) => {
    const button = document.createElement('button');
    button.innerHTML = 'open in JS Tutor';
    button.onclick = () => {
      const encodedJST = encodeURIComponent(editor.getValue());
      const sanitizedJST = encodedJST
        .replace(/\(/g, '%28').replace(/\)/g, '%29')
        .replace(/%09/g, '%20%20');
      // const jsTutorURL = "http://www.pythontutor.com/live.html#code=" + sanitizedJST + "&cumulative=false&curInstr=2&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false";
      const URL = "http://www.pythontutor.com/javascript.html#code=" + sanitizedJST + "&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D";
      window.open(URL, '_blank');
    };
    return button;
  },
  loupe: (editor) => {
    const button = document.createElement('button');
    button.innerHTML = 'open in Loupe';
    button.onclick = () => {
      const encoded = encodeURIComponent(btoa(editor.getValue()));
      const URL = "http://latentflip.com/loupe/?code=" + encoded + "!!!"
      window.open(URL, '_blank');
    };
    return button;
  }
};

codeAlong.js = (iframe, steps, config) => {

  const title = config.title;

  const stepsContainer = document.createElement('div');

  const editorContainer = document.createElement('div');
  editorContainer.style = 'height:98vh;width:55vw;';

  const ace = iframe.contentWindow.ace;
  // const ace = ace;
  const editor = ace.edit(editorContainer);
  editor.setTheme('ace/theme/chrome');
  editor.setFontSize(12);
  editor.getSession().setMode('ace/mode/javascript');
  editor.getSession().setTabSize(1);


  if (steps.length === 0) {
    const defaultCode = "// https://developer.mozilla.org/en-US/docs/Web/API/Console/assert\n" +
      "console.assert(true, 'passing assert');\n" +
      "console.assert(false, 'failing assert');\n";
    steps.push({
      code: defaultCode,
      name: 'default'
    })
  };

  steps.forEach(step => {
    step.session = ace.createEditSession(step.code, 'javascript');
    step.session.setMode('ace/mode/javascript');
    step.session.setOptions({ tabSize: 2, useSoftTabs: true });
  });

  const resultsContainer = document.createElement('div');


  if (steps.length > 1) {
    editorContainer.style = 'height:92vh;width:55vw;';
    const stepButtons = steps.map((step, index) => {
      const button = document.createElement('button');
      button.style = 'height:5%;';
      const name = step.name ? step.name : 'step ' + index;
      const code = document.createElement('code');
      code.innerHTML = name;
      button.appendChild(code);
      button.onclick = () => {

        active = step;
        stepButtons.forEach(stepButton => {
          stepButton.style.background = '';
        })
        button.style.background = 'darkgrey';

        editor.setSession(step.session);

        resultsContainer.innerHTML = '';

      }
      step.button = button;
      return button;
    });

    const buttonsContainer = steps
      .reduce((div, step) => {
        div.appendChild(step.button);
        return div;
      }, document.createElement('div'));
    buttonsContainer.style = 'padding-bottom:1%';
    stepsContainer.appendChild(buttonsContainer);

    steps[0].button.style.background = 'darkgrey';
  }

  stepsContainer.appendChild(editorContainer);

  editor.setSession(steps[0].session);

  editor.setValue(steps[0].code);

  const evaluateInCodeAlong = document.createElement('button');
  evaluateInCodeAlong.innerHTML = 'evaluate code';
  const nativeConsole = console;
  evaluateInCodeAlong.addEventListener('click', function evaluateCode() {
    resultsContainer.innerHTML = '';
    const your_source_code = editor.getValue();

    // const nativeConsole = console;
    const console = Object.create(nativeConsole);
    // const fakeConsole = console;
    console.assert = function () {
      nativeConsole.assert(...Array.from(arguments));

      const statusString = arguments[0] ? 'PASS: ' : 'FAIL: ';
      const statusEl = document.createElement('p');
      statusEl.innerText = statusString;
      statusEl.style.display = 'inline';
      // revisit color choices
      statusEl.style.color = arguments[0] ? 'green' : 'orange';


      const newLi = document.createElement('li');
      newLi.style = 'padding-top:1%;'
      newLi.appendChild(statusEl);

      const messages = Array.from(arguments).slice(1);
      for (let thing of messages) {

        newLi.appendChild(codeAlong.toElement(thing))

        newLi.appendChild(document.createTextNode('\u00a0 \u00a0'))
      }

      resultsContainer.appendChild(newLi);
      // resultsEl.appendChild(newLi);

    }

    console.log = function () {
      nativeConsole.log(...Array.from(arguments));


      const newLi = document.createElement('li');
      for (let thing of Array.from(arguments)) {

        newLi.appendChild(codeAlong.toElement(thing))

        newLi.appendChild(document.createTextNode('\u00a0 \u00a0'))
      }

      resultsContainer.appendChild(newLi);

    }

    console.error = function () {
      nativeConsole.error(...Array.from(arguments));


      const newLi = document.createElement('li');
      for (let thing of Array.from(arguments)) {

        newLi.appendChild(codeAlong.toElement(thing))

        newLi.appendChild(document.createTextNode('\u00a0 \u00a0'))
      }

      resultsContainer.appendChild(newLi);

    }

    const renderError = (err, noCallstackMessage) => {
      const errorEl = document.createElement('pre');
      errorEl.style.color = "red";
      const duckDuckLink = document.createElement('a');
      duckDuckLink.innerHTML = '<strong>' + err.name + '</strong>: ' + err.message + ' (click to search)';
      duckDuckLink.href = `https://duckduckgo.com/?q=javascript+${err.name}+${err.message}&atb=v185-2_d&ia=web`;
      duckDuckLink.target = '_blank';
      duckDuckLink.style.color = 'red';
      const searchButton = document.createElement('button');
      searchButton.appendChild(duckDuckLink)
      errorEl.appendChild(searchButton);
      if (!noCallstackMessage) {
        errorEl.appendChild(document.createTextNode('\n\n   callstack is logged to the console'));
      }
      return errorEl;
    }
    const renderHaltingWarning = (err) => {
      const warningEl = document.createElement('pre');
      warningEl.style.color = "#ff6f3f";
      warningEl.innerHTML = 'Warning: ' + err.message + '\n\n   callstack is logged to the console';
      return warningEl;
    }
    const renderPhase = didExecute => {
      const phaseEl = document.createElement('pre');
      const phase = didExecute.status ? 'Execution Phase' : "Creation Phase"
      phaseEl.innerHTML = '   thrown during ' + phase;
      return phaseEl;
    }


    window.onerror = function (msg, url, lineNo, columnNo, error) {
      console.log('hi')
      // console.log(msg); // error name + message
      // console.log(url); // empty for exercises
      // console.log(lineNo); // number out of context
      // console.log(columnNo); // number out of context
      // console.error(error); // duplication of what happens anyway
      // const errOrWarning = error.message === 'Loop exceeded 1000 iterations'
      //   ? renderHaltingWarning(error)
      //   : renderError(error);
      const errOrWarning = renderError(error);
      resultsContainer.appendChild(errOrWarning);
      resultsContainer.appendChild(renderPhase(true));
      const isAsync = document.createElement('pre');
      isAsync.innerHTML = '   asynchronous error';
      resultsContainer.appendChild(isAsync);
      return false;
    };

    const didExecute = { status: false };
    try {
      // https://github.com/xieranmaya/infinite-loop-detector
      const loopDetected = your_source_code.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
        const id = parseInt(Math.random() * Number.MAX_SAFE_INTEGER) // not guaranteed unique, but good enough
        return `let __${id} = 0;${loopHead}if (++__${id} > 1000) { throw new Error('Loop exceeded 1000 iterations'); }`
      });
      const executionDetectored = 'didExecute.status = true; ' + loopDetected;
      eval(executionDetectored);
    } catch (err) {
      nativeConsole.error(err);

      // const errOrWarning = err.message === 'Loop exceeded 1000 iterations'
      //   ? renderHaltingWarning(err)
      //   : renderError(err);
      const errOrWarning = renderError(err);
      resultsContainer.appendChild(errOrWarning);
      resultsContainer.appendChild(renderPhase(didExecute));
    }

  });

  // binding evaluation function to window
  //   for 'this' correctness
  //   globaling function & var
  //   much simpler callstack in the debugger
  //   and still does arrows correctly
  const step_through_in_debugger = (function step_through_in_debugger() {
    resultsContainer.innerHTML = '';
    const your_source_code = editor.getValue();
    const executing_your_code = eval; // for global scope
    executing_your_code(
      'debugger; // injected by codeAlong\n'
      + '\n'
      + your_source_code
    );
    const debuggeredEl = document.createElement('pre');
    debuggeredEl.innerHTML = "    All done! \n\n    (psst. try again with devtools open if they aren't already)";;
    resultsContainer.appendChild(debuggeredEl);
  }).bind(window);
  const evaluateInDebugger = document.createElement('button');
  evaluateInDebugger.innerHTML = 'step through in debugger';
  evaluateInDebugger.addEventListener('click', step_through_in_debugger);

  function with_infinite_loop_guard(event) {
    resultsContainer.innerHTML = '';
    const max = Number(event.target.form.max.value);
    let allDone;
    try {
      // does it exist?
      js_beautify('', {
        indent_size: '  ',
        "brace_style": "collapse,preserve-inline",
      });
      allDone = codeAlong.format_and_loop_guard(
        js_beautify(editor.getValue(), {
          indent_size: '  ',
          "brace_style": "collapse,preserve-inline",
        })
        , max);
    } catch (err) {
      allDone = codeAlong.with_infinite_loop_guard(editor.getValue(), max);
    }
    const debuggeredEl = document.createElement('pre');
    debuggeredEl.innerHTML = allDone;
    resultsContainer.appendChild(debuggeredEl);
  }
  const withLoopGuard = document.createElement('input');
  withLoopGuard.setAttribute('type', 'button');
  withLoopGuard.value = '... with max_iterations = ';
  withLoopGuard.addEventListener('click', with_infinite_loop_guard);
  const maxIterationsInput = document.createElement('input');
  maxIterationsInput.value = 10;
  maxIterationsInput.name = 'max';
  maxIterationsInput.style = 'width:3em';

  const maxIterationsForm = document.createElement('form');
  maxIterationsForm.style = 'display:inline-block;';
  maxIterationsForm.appendChild(withLoopGuard);
  maxIterationsForm.appendChild(maxIterationsInput);



  const linterButton = document.createElement('button');
  linterButton.innerHTML = 'open in JSHint';
  linterButton.onclick = () => {
    const encodedLintee = encodeURIComponent(editor.getValue());
    const sanitizedLintee = encodedLintee
      .replace(/\(/g, '%28').replace(/\)/g, '%29')
      .replace(/%09/g, '%20%20');
    const linterURL = "http://janke-learning.org/linter/?snippet=" + sanitizedLintee;
    window.open(linterURL, '_blank');
  };

  const buttonsButton = document.createElement('button');
  buttonsButton.innerHTML = 'so many buttons?';
  buttonsButton.onclick = () => alert(codeAlongGuide);


  const buttonDiv = document.createElement('div');
  buttonDiv.style = 'margin-top:2%;margin-bottom:2%;text-align:center;';
  buttonDiv.appendChild(evaluateInCodeAlong);
  buttonDiv.appendChild(evaluateInDebugger);
  buttonDiv.appendChild(maxIterationsForm);
  buttonDiv.appendChild(document.createElement('br'));
  if (!config.openIn) {
    buttonDiv.appendChild(codeAlong.openIn.jstutor(editor));
  } else {
    config.openIn.forEach(viztool => {
      try {
        buttonDiv.appendChild(codeAlong.openIn[viztool.toLowerCase()](editor));
      } catch (err) {
        console.log('cannot open in ' + viztool);
      };
    });
  }
  try {
    // does it exist?
    prettier.format(
      '',
      {
        parser: "babylon",
        plugins: prettierPlugins
      }
    );

    const formatCode = document.createElement('button');
    formatCode.innerHTML = 'first syntax error';
    formatCode.addEventListener('click', () => {
      try {
        prettier.format(
          editor.getValue(),
          {
            parser: "babylon",
            plugins: prettierPlugins
          }
        );
        const allGoodPre = document.createElement('pre');
        allGoodPre.innerHTML = '  no syntax errors found';
        allGoodPre.style = 'padding-left:5px;'
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(allGoodPre);
      } catch (err) {
        const errPre = document.createElement('pre');
        errPre.innerHTML = err.message;
        errPre.style = 'padding-left:5px;'
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(errPre);
      }
    });
    buttonDiv.appendChild(formatCode);
  } catch (e) { }

  try {
    // does it exist?
    js_beautify('', {
      indent_size: '  ',
      "brace_style": "collapse,preserve-inline",
    })

    const formatCode = document.createElement('button');
    formatCode.innerHTML = 'format code';
    formatCode.addEventListener('click', () => {
      const beautified = js_beautify(editor.getValue(), {
        indent_size: 2,
        "brace_style": "collapse,preserve-inline",
      })
      editor.setValue(beautified);
    });
    buttonDiv.appendChild(formatCode);
  } catch (e) { }

  buttonDiv.appendChild(linterButton);
  // buttonDiv.appendChild(buttonsButton);



  resultsContainer.id = '-- assertions --';
  resultsContainer.style = config.title
    ? 'overflow-y: scroll; height: 76%'
    : 'overflow-y: scroll; height: 86%';


  const initialResult = document.createElement('pre');
  resultsContainer.appendChild(initialResult);

  const collapseOutputButton = document.createElement('button');
  collapseOutputButton.style = 'float:right;';
  collapseOutputButton.innerHTML = 'collapse results';
  const renderCollapsed = () => {
    outputContainer.innerHTML = '';
    outputContainer.appendChild(collapsedOutput);
    // outputContainer.style = 'height: 5vh; width: 98vw; z-index: 100; position: absolute; bottom: 3vh;';
    outputContainer.style = '  z-index: 100; position: absolute; bottom: 0px; right: 0px;';
    editorContainer.style = 'height:92vh;width:94vw;';
    editor.resize();
  };
  collapseOutputButton.onclick = renderCollapsed;

  const visibleContainer = document.createElement('div');
  visibleContainer.appendChild(collapseOutputButton);
  // visibleContainer.style = 'height: 98vh; width: 55vw; border:solid 1px;';
  visibleContainer.style = 'border:solid 1px;';
  if (typeof title === 'string') {
    const titleEl = document.createElement('h1');
    titleEl.innerHTML = title;
    titleEl.style = 'text-align: center;';
    visibleContainer.appendChild(titleEl);
  }
  visibleContainer.appendChild(buttonDiv);
  visibleContainer.appendChild(document.createElement('hr'));
  visibleContainer.appendChild(resultsContainer);


  const collapsedOutput = document.createElement('div');
  // collapsedOutput.style = 'height: 10vh; width: 55vw; border:solid 1px;';
  collapsedOutput.style = 'border:solid 1px; opacity: 1; background-color: white; float: right;';

  const unCollapseOutputButton = document.createElement('button');
  // unCollapseOutputButton.style = 'float:right;';
  unCollapseOutputButton.innerHTML = 'un-collapse results';
  const renderUnCollapsed = () => {
    outputContainer.innerHTML = '';
    outputContainer.appendChild(visibleContainer);
    outputContainer.style = 'height: 86vh; width: 45vw; scroll: auto;';
    editorContainer.style = 'height:92vh;width:55vw;';
    editor.resize();
  };
  unCollapseOutputButton.onclick = renderUnCollapsed;

  const evalButton = document.createElement('button');
  evalButton.innerHTML = '&nbsp; &nbsp; run code &nbsp; &nbsp;';
  // bind to window for this-ing
  evalButton.addEventListener('click', (function eval_code() {
    try {
      eval(editor.getValue())
    } catch (err) {
      console.error(err);
    }
  }).bind(window));

  collapsedOutput.appendChild(evalButton);
  const evaluateInDebuggerCopy = evaluateInDebugger.cloneNode(true);
  evaluateInDebuggerCopy.onclick = step_through_in_debugger;
  collapsedOutput.appendChild(evaluateInDebuggerCopy);
  const maxIterationsFormCopy = maxIterationsForm.cloneNode(true);
  {
    maxIterationsFormCopy.childNodes[0].onclick = with_infinite_loop_guard;

    function with_infinite_loop_guard(event) {
      resultsContainer.innerHTML = '';
      const max = Number(event.target.form.max.value);
      try {
        // does it exist?
        js_beautify('', {
          indent_size: '  ',
          "brace_style": "collapse,preserve-inline",
        });
        codeAlong.format_and_loop_guard(
          js_beautify(editor.getValue(), {
            indent_size: '  ',
            "brace_style": "collapse,preserve-inline",
          })
          , max);
      } catch (err) {
        codeAlong.with_infinite_loop_guard(editor.getValue(), max);
      }
    }
  }
  collapsedOutput.appendChild(maxIterationsFormCopy);
  collapsedOutput.appendChild(unCollapseOutputButton);

  if (typeof title === 'string') {
    const titleEl = document.createElement('h3');
    titleEl.innerHTML = title;
    titleEl.style = 'text-align: center; margin-top: 0%;margin-bottom: 0%;';
    collapsedOutput.appendChild(titleEl);
  }

  const outputContainer = document.createElement('div');
  outputContainer.style = 'height: 96vh; width: 45vw;';
  if (config.collapsed === true) {
    renderCollapsed();
  } else {
    renderUnCollapsed();
  }

  iframe.contentDocument.body.style = 'display:flex; flex-direction:row;';
  iframe.contentDocument.body.appendChild(stepsContainer);
  iframe.contentDocument.body.appendChild(outputContainer);

}

codeAlong.format_and_loop_guard = (function with_infinite_loop_guard(your_source_code, max_iterations) {
  let number_of_loops = 0;
  try {
    eval(
      'debugger; // injected by codeAlong\n'
      + '\n'
      + js_beautify(
        your_source_code.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
          number_of_loops++;
          return `let loop_${number_of_loops}_iterations = 0;\n ${loopHead}\n if (++loop_${number_of_loops}_iterations > ${max_iterations}) {throw new Error('Loop ${number_of_loops} exceeded ${max_iterations} iterations');}\n`
        }),
        {
          indent_size: '  ',
          "brace_style": "collapse,preserve-inline",
        }
      )
    );
  } catch (err) {
    console.error(err);
  };
  return "     All done! \n\n     (psst. your devtools must be open)";
}).bind(window);

codeAlong.with_infinite_loop_guard = (function with_infinite_loop_guard(your_source_code, max_iterations) {
  let number_of_loops = 0;
  try {
    eval(
      'debugger; // injected by codeAlong\n'
      + '\n'
      +
      your_source_code.replace(/for *\(.*\{|while *\(.*\{|do *\{/g, loopHead => {
        number_of_loops++;
        return `let loop_${number_of_loops}_iterations = 0;\n ${loopHead}\n if (++loop_${number_of_loops}_iterations > ${max_iterations}) {throw new Error('Loop ${number_of_loops} exceeded ${max_iterations} iterations');}\n`
      })
    );
  } catch (err) {
    console.error(err);
  };
  return "     All done! \n\n     (psst. your devtools must be open)";
}).bind(window);

codeAlong.toElement = (() => {

  const toElement = (thing, depth) => {

    depth = (depth === undefined)
      ? 1
      : depth;

    let elemented;
    if (thing instanceof Error) {
      elemented = toElement.error(thing, depth);

    } else if (thing instanceof Element) {
      elemented = toElement.element(thing, depth);

    } else if (typeof thing === 'function') {
      elemented = toElement.function(thing, depth);

    } else if (typeof thing === 'string') {
      elemented = toElement.string(thing, depth);

    } else if (typeof thing === 'number') {
      elemented = toElement.number(thing, depth);

    } else if (typeof thing === 'boolean') {
      elemented = toElement.boolean(thing, depth);

    } else if (typeof thing === 'symbol') {
      elemented = toElement.symbol(thing, depth);

    } else if (thing === undefined) {
      elemented = toElement.undefined(thing, depth);

    } else if (thing === null) {
      elemented = toElement.null(thing, depth);

    } else if (Array.isArray(thing)) {
      elemented = toElement.array(thing, depth);

      // } else if (thing.constructor.name === 'Object') {
    } else if (thing === Object(thing)) {
      elemented = toElement.object(thing, depth);

    } else {
      elemented = '"un-toElement-able type"';
    }

    return elemented;
  }

  toElement.indent = (depth) => {
    let indent = '';
    for (let i = 0; i < depth; i++) indent += '  ';
    return indent;
  }

  toElement.object = (obj, depth) => {

    if (Object.keys(obj).length === 0) {
      const el = document.createElement('text');
      el.textContent = '{ }';
      return el;
    };

    const objEl = document.createElement('div');
    objEl.style.display = 'inline';
    objEl.appendChild(document.createTextNode('{'));
    for (let key in obj) {

      const descriptor = Object.getOwnPropertyDescriptor(obj, key);

      if (descriptor.hasOwnProperty('value')) {
        const keyEl = document.createElement('pre');
        keyEl.style.display = 'inline';
        keyEl.textContent = `\n${toElement.indent(depth)}${key}: `;
        const valEl = toElement(obj[key], depth + 1);
        objEl.appendChild(keyEl);
        objEl.appendChild(valEl);
        objEl.appendChild(document.createTextNode(','));
      }

      if (descriptor.set || descriptor.get) {
        const valEl = toElement(obj[key]);
        objEl.appendChild(valEl);
        objEl.appendChild(document.createTextNode(','));
      }
    }
    objEl.appendChild(document.createElement('br'));
    const closeEl = document.createElement('pre');
    closeEl.style.display = 'inline';
    closeEl.textContent = toElement.indent(depth - 1) + '}';
    objEl.appendChild(closeEl);

    return objEl;
  };

  toElement.array = (arr, depth) => {

    if (arr.length === 0) {
      const el = document.createElement('text');
      el.textContent = '[ ]';
      return el;
    }

    const arrEl = document.createElement('div');
    arrEl.style.display = 'inline';
    arrEl.appendChild(document.createTextNode('['));
    for (let item of arr) {

      const indentEl = document.createElement('pre');
      indentEl.style.display = 'inline';
      indentEl.textContent = `\n${toElement.indent(depth)}`;
      const valEl = toElement(item, depth + 1);
      arrEl.appendChild(indentEl);
      arrEl.appendChild(valEl);
      arrEl.appendChild(document.createTextNode(','));

    }
    arrEl.appendChild(document.createElement('br'));
    const closeEl = document.createElement('pre');
    closeEl.style.display = 'inline';
    closeEl.textContent = toElement.indent(depth - 1) + ']';
    arrEl.appendChild(closeEl);

    return arrEl;
  };

  toElement.function = (func, depth) => {
    const el = document.createElement('pre');
    el.style.display = 'inline';
    el.innerHTML = func
      .toString()
      .split('\n')
      .join('\n' + toElement.indent(depth - 1));
    return el;
  };

  toElement.string = (val, depth) => {
    const el = document.createElement('pre');
    el.style.display = 'inline';
    el.textContent = '"' + val + '"'
    // .split('\n')
    // .join('\n' + toElement.indent(depth));
    return el;
  };

  toElement.boolean = (val) => {
    const el = document.createElement('pre');
    el.style.display = 'inline';
    el.innerHTML = String(val);
    el.style.color = 'darkgreen';
    return el;
  };

  toElement.number = (val) => {
    const el = document.createElement('pre');
    el.style.display = 'inline';
    el.innerHTML = String(val);
    el.style.color = 'blue';
    return el;
  };

  toElement.symbol = String;

  toElement.null = (val) => {
    const el = document.createElement('pre');
    el.style.display = 'inline';
    el.innerHTML = String(val);
    el.style.color = 'grey';
    return el;
  };

  toElement.undefined = (val) => {
    const el = document.createElement('pre');
    el.style.display = 'inline';
    el.innerHTML = String(val);
    el.style.color = 'grey';
    return el;
  };

  toElement.error = (val) => {
    const el = document.createElement('pre');
    el.style = 'display:inline; color:red;';
    el.innerHTML = val.stack;
    return el;
  };

  toElement.element = (val) => {
    const el = document.createElement('pre');
    el.style.display = 'inline';
    el.textContent = val.outerHTML;
    return el;
  };

  Object.freeze(toElement);

  return toElement
})()
