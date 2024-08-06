import { HeroIconType } from "../Types";

import {
  Javascript,
  Typescript,
  Supabase,
  Svelte,
  Node,
  Django,
  Solid,
  Tailwind,
  React,
  Next,
} from "../component/icons";

export const codeSamples: HeroIconType[] = [
  {
    name: "Javascript",
    link: "https://www.javascript.com/",
    language: "javascript",
    Icon: Javascript,
    position: {
      top: "-45",
      left: "-40",
    },
    rotate: 10,
    code: `const createNewElement = (event) => {
    const newElement = document.createElement('div');
    newElement.className = 'new-element';
    newElement.style.left = event.clientX + 'px';
    newElement.style.top = event.clientY + 'px';
    newElement.textContent = 'New Element';
    document.body.appendChild(newElement);
}

document.getElementById('startButton').addEventListener('click', () => {
    document.addEventListener('mousemove', createNewElement);
    setTimeout(() => {
        document.removeEventListener('mousemove', createNewElement);
    }, 5000); // Stops after 5 seconds
});
`,
  },
  {
    language: "javascript",
    link: "https://nodejs.org",
    Icon: Node,
    name: "Node.js",
    position: {
      top: "120",
      left: "-80",
    },
    rotate: -6,
    code: `
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});`,
  },
  {
    language: "xml",
    Icon: Svelte,
    link: "https://svelte.dev/",

    name: "Svelte",
    position: {
      bottom: "-60",
      left: "-5",
    },
    rotate: -12,
    code: `
<script>
    let count = 0;
    function handleClick() {
        count += 1;
    }
</script>
<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>`,
  },
  {
    language: "xml",
    Icon: Tailwind, // Replace with the correct icon
    link: "tailwindcss.com",
    name: "Tailwind CSS",
    position: {
      bottom: "60",
      right: "-70",
    },
    rotate: 18,
    code: `
<h1 class="text-4xl font-bold text-center text-blue-500" >
    The best CSS framework
</h1>
`,
  },
  {
    language: "typescript",
    Icon: Typescript,
    link: "https://www.typescriptlang.org/",
    name: "Typescript",
    position: {
      top: "-75",
      right: "70",
    },
    rotate: -14,
    code: `
interface User {
    name: string;
    age: number;
    email: string;
}
const user: User = {
    name: "John Doe",
    age: 25,
    email: "johndoe@example.com"
}`,
  },
  {
    language: "javascript",
    Icon: React, // Replace with the correct icon
    link: "https://react.dev/",
    name: "React",
    position: {
      bottom: "-60",
      right: "30",
    },
    rotate: 6,
    code: `
const App = () => {
    const [count, setCount] = React.useState(0);
    return (
        <button onClick={ () => setCount(count+1) }>
            {count}
        </button>
    );
};
`,
  },
  {
    language: "javascript",
    link: "supabase.com",
    Icon: Supabase,
    name: "Supabase",
    position: {
      top: "-20",
      right: "-80",
    },
    rotate: -6,
    code: `
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;`,
  },
  {
    language: "javascript",
    link: "nextjs.org",
    Icon: Next, // Replace with the correct icon
    name: "Next.js",
    position: {
      top: "-90",
      left: "80",
    },
    rotate: 10,
    code: ` 
import React from 'react';
const Home = () => {
 return (
    <div>
            <h1>Welcome to Next.js!</h1>
            <p>Start building your application.</p>
          </div>
  );
};

export default Home;`,
  },
  {
    language: "python",
    link: "https://www.djangoproject.com/",
    Icon: Django,
    name: "Django",
    position: {
      bottom: "-80",
      left: "150",
    },
    rotate: -5,
    code: `
from django.http import HttpResponse
from django.shortcuts import render
def hello(request):
    return HttpResponse("Hello, Django!")`,
  },
  {
    language: "javascript",
    link: "https://www.solidjs.com/",
    Icon: Solid,
    name: "Solid",
    position: {
      top: "-90",
      right: "180",
    },
    rotate: 4,
    code: `import { createSignal } from "solid-js";
  const App = () => {
      const [count, setCount] = createSignal(0);
      return (
          <div>
              <h1>{count()}</h1>
              <button onClick={() => setCount(count() + 1)}>Increment</button>
          </div>
      );
  };`,
  },
];
