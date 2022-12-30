// Code Snippets in raw HTML for Typed.js

export const typescriptCode = `
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
