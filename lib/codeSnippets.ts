// Code Snippets in raw HTML for Typed.js

export const tsCode = `
<span id='purple'>import</span> <span id='red'>firebase</span> <span id='purple'>from</span> <span id='green'>&apos;firebase/compat/app&apos;</span><span id='grey'>;</span><br>
<span id='purple'>import</span> <span id='green'>&apos;firebase/compat/auth&apos;</span><span id='grey'>;</span><br>
<span id='purple'>import</span> <span id='green'>&apos;firebase/compat/firestore&apos;</span><span id='grey'>;</span><br>
<span id='purple'>import</span> <span id='green'>&apos;firebase/compat/storage&apos;</span><span id='grey'>;</span><br>
<br>
<span id='purple'>const</span> <span id='orange'>firebaseConfig</span> <span id='blue'>=</span> <span id='yellow'>{</span><br>
  &emsp;<span id='red'>apiKey</span><span id='blue'>:</span> <span id='green'>&apos;bRUcEw@yNeISNOTbatMAn&apos;</span><span id='grey'>,</span><br>
  &emsp;<span id='red'>authDomain</span><span id='blue'>:</span> <span id='green'>&apos;batman.firebaseapp.com&apos;</span><span id='grey'>,</span><br>
  &emsp;<span id='red'>projectId<span id='blue'>:</span> <span id='green'>&apos;joker-destroyer&apos;</span><span id='grey'>,</span><br>
  &emsp;<span id='red'>storageBucket</span><span id='blue'>:</span> <span id='green'>&apos;wayne-manor.appspot.com&apos;</span><span id='grey'>,</span><br>
  &emsp;<span id='red'>messagingSenderId:<span id='blue'>:</span> <span id='green'>&apos;42069&apos;</span><span id='grey'>,</span><br>
  &emsp;<span id='red'>appId</span><span id='blue'>:</span> <span id='green'>&apos;1:12345678:web:1a2b3c4d5e&apos;</span><span id='grey'>,</span><br>
  &emsp;<span id='red'>measurementId</span><span id='blue'>:</span> <span id='green'>&apos;G-GOTHAMoverMETROPOLIS&apos;</span><span id='grey'>,</span><br>
<span id='yellow'>}</span><span id='grey'>;</span><br>
<br>
<span id='grey'>firebase.</span><span id='blue'>initializeApp</span><span id='yellow'>(</span><span id='grey'>firebaseConfig</span><span id='yellow'>)</span><span id='grey'>;</span><br>
<span id='purple'>export const</span> <span id='orange'>auth</span> <span id='blue'>=</span> <span id='grey'>firebase.</span><span id='blue'>auth</span><span id='yellow'>()</span><span id='grey'>;</span><br>
<span id='purple'>export const</span> <span id='orange'>db</span> <span id='blue'>=</span> <span id='grey'>firebase.</span><span id='blue'>firestore</span><span id='yellow'>()</span><span id='grey'>;</span><br>
<span id='purple'>export const</span> <span id='orange'>storage</span> <span id='blue'>=</span> <span id='grey'>firebase.</span><span id='blue'>storage</span><span id='yellow'>()</span><span id='grey'>;</span><br>
`;

export const goCode = `
<span id='purple'>package</span> <span id='grey'>main</span><br>
<br>
<span id='purple'>func</span> <span id='blue'>main</span><span id='yellow'>()</span><br>
    &emsp;<span id='red'>resp</span><span id='grey'>, </span><span id='red'>err</span> <span id='purple'>:=</span> <span id='grey'>http.</span><span id='teal'>Get</span><span id='purple'>(</span><span id='green'>"https://shady-site.com"</span><span id='purple'>)</span><br>
    &emsp;<span id='purple'>if</span> <span id='grey'>err</span> <span id='purple'>!=</span> <span id='orange'>nil</span> <span id='purple'>{</span><br>
    &emsp;&emsp;<span id='grey'>log.</span><span id='teal'>Fatal</span><span id='blue'>(</span><span id='green'>"Website too shady!"</span><span id='blue'>)</span><br>
    &emsp;<span id='purple'>}</span><br>
    &emsp;<span id='red'>body</span><span id='grey'>, </span><span id='red'>err</span> <span id='purple'>:=</span> <span id='grey'>ioutil.</span><span id='teal'>ReadAll<span id='purple'>(</span><span id='grey'>resp.Body</span><span id='purple'>)</span><br>
    &emsp;<span id='purple'>if</span> <span id='grey'>err</span> <span id='purple'>!=</span> <span id='orange'>nil</span> <span id='purple'>{</span><br>
    &emsp;&emsp;<span id='grey'>log.</span><span id='teal'>Fatal</span><span id='blue'>(</span><span id='green'>"Shady body can't be read!"</span><span id='blue'>)</span><br>
    &emsp;<span id='purple'>}</span><br>
    &emsp;<span id='purple'>type</span> <span id='yellow'>ShadyItem</span> <span id='purple'>struct {</span><br>
    &emsp;&emsp;<span id='grey'>name</span> <span id='purple'>string</span><br>
    &emsp;&emsp;<span id='grey'>price</span> <span id='purple'>float32</span><br>
    &emsp;<span id='purple'>}</span><br>
    &emsp;<span id='purple'>var</span> <span id='red'>redClownNose</span> <span id='grey'>ShadyItem</span><br>
    &emsp;<span id='purple'>if</span> <span id='red'>err</span> <span id='purple'>:=</span> <span id='grey'>json.</span><span id='teal'>Unmarshal</span><span id='purple'>(</span><span id='grey'>body, </span><span id='purple'>&</span><span id='grey'>redClownNose</span><span id='purple'>)</span><span id='grey'>; err</span> <span id='purple'>!=</span> <span id='orange'>nil</span> <span id='purple'>{</span><br>
    &emsp;&emsp;<span id='grey'>log.</span><span id='teal'>Fatal</span><span id='blue'>(</span><span id='green'>"This object isn&apos;t a shady item!"</span><span id='blue'>)</span><br>
    &emsp;<span id='purple'>}</span><br>
    &emsp;<span id='grey'>fmt.</span><span id='teal'>Println</span><span id='purple'>(</span><span id='green'>"Here you go"</span><span id='grey'>, redClownNose</span><span id='purple'>)</span><br>
`;

export const javaCode = `
<span id='purple'>import</span> <span id='yellow'>java.util.*</span><span id='grey'>;</span><br>
<br>
<span id='purple'>class</span> <span id='yellow'>LeetCodeStocks {</span><br>
    &emsp;<span id='purple'>public</span> <span id='blue'>maximumProfit</span><span id='purple'>(</span><span id='yellow'>int</span><span id='blue'>[]</span>  <span id='grey'>present,</span> <span id='yellow'>int</span><span id='blue'>[]</span> <span id='grey'>present,</span> <span id='yellow'>int</span> <span id='grey'>budget</span><span id='purple'>) {</span><br>
        &emsp;&emsp;<span id='yellow'>int</span> <span id='grey'>n</span> <span id='purple'>=</span> <span id='grey'>present</span><span id='purple'>.</span> <span id='grey'>length;</span><br>
        &emsp;&emsp;<span id='yellow'>int</span><span id='blue'>[][]</span> <span id='grey'>dp</span> <span id='purple'>= new</span> <span id='yellow'>int</span> <span id='blue'>[</span><span id='grey'>n</span> <span id='purple'>+</span> <span id='orange'>1</span><span id='blue'>][</span><span id='grey'>budget</span> <span id='purple'>+</span> <span id='orange'>1</span><span id='blue'>]</span><span id='grey'>;</span><br>
        &emsp;&emsp;<span id='purple'>for</span> <span id='blue'>(</span><span id='yellow'>int</span> <span id='grey'>i</span> <span id='purple'>=</span> <span id='orange'>1</span><span id='grey'>; i</span> <span id='purple'><=</span> <span id='grey'>n; i</span><span id='purple'>++</span><span id='blue'>) {</span><br>
            &emsp;&emsp;&emsp;<span id='purple'>for</span> <span id='yellow'>(int</span>  <span id='grey'>k</span> <span id='purple'>=</span> <span id='orange'>0</span> <span id='grey'>; k</span> <span id='purple'><=</span> <span id='grey'>budget; k</span><span id='purple'>++</span><span id='yellow'>) {</span><br>
                &emsp;&emsp;&emsp;&emsp;<span id='purple'>if (</span><span id='grey'>k</span> <span id='purple'>>=</span> <span id='grey'>present</span><span id='blue'>[</span><span id='grey'>i</span> <span id='purple'>-</span> <span id='orange'>1</span><span id='blue'>]</span><span id='purple'>)</span><br>
                    &emsp;&emsp;&emsp;&emsp;&emsp;<span id='grey'>dp</span><span id='purple'>[</span><span id='grey'>i</span><span id='purple'>][</span><span id='grey'>k</span><span id='purple'>] =</span> <span id='yellow'>Math</span><span id='purple'>.</span><span id='grey'>max</span><span id='purple'>(</span><span id='grey'>dp</span><span id='blue'>[</span><span id='grey'>i</span>  <span id='purple'>-</span> <span id='orange'>1</span><span id='blue'>][</span><span id='grey'>k</span>  <span id='purple'>-</span> <span id='grey'>present</span><span id='yellow'>[</span><span id='grey'>i</span> <span id='purple'>-</span> <span id='orange'>1</span><span id='yellow'>]</span><span id='blue'>]</span><br>
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span id='purple'>+</span>  <span id='blue'>(</span><span id='grey'>future</span><span id='yellow'>[</span><span id='grey'>i</span> <span id='purple'>-</span> <span id='orange'>1</span><span id='yellow'>]</span> <span id='purple'>-</span> <span id='grey'>present</span><span id='yellow'>[</span><span id='grey'>i</span> <span id='purple'>-</span> <span id='orange'>1</span><span id='yellow'>]</span><span id='blue'>)</span><span id='grey'>, dp</span><span id='blue'>[</span><span id='grey'>i</span> <span id='purple'>-</span> <span id='orange'>1</span><span id='blue'>][</span><span id='grey'>k</span><span id='blue'>]</span><span id='purple'>)</span>
                    &emsp;&emsp;&emsp;&emsp;<span id='purple'>else</span><br>
                        &emsp;&emsp;&emsp;&emsp;&emsp;<span id='grey'>dp</span><span id='purple'>[</span><span id='grey'>i</span><span id='purple'>][</span><span id='grey'>k</span><span id='purple'>] =</span>  <span id='grey'>dp</span><span id='purple'>[</span><span id='grey'>i</span><span id='purple'>-</span> <span id='orange'>1<span id='purple'>][</span><span id='grey'>k</span><span id='purple'>]</span><span id='grey'>;</span><br>
            &emsp;&emsp;&emsp;<span id='yellow'>}</span><br>
        &emsp;&emsp;<span id='blue'>}</span><br>
        &emsp;&emsp;<span id='purple'>return</span> <span id='grey'>dp</span><span id='blue'>[</span><span id='grey'>n</span><span id='blue'>][</span><span id='grey'>budget</span><span id='blue'>]</span><span id='grey'>;</span><br>
    &emsp;<span id='purple'>}</span><br>
<span id='yellow'>}</span><br>
`;
