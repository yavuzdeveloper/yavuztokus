export const blogPosts = [
  {
    id: 1,
    slug: "css-grid-vs-flexbox-comprehensive-guide",
    title: "CSS Grid vs Flexbox: Comprehensive Guide for Modern Layouts",
    excerpt:
      "Deep understanding of when and how to use CSS Grid and Flexbox with advanced techniques and real-world layout examples.",
    content: `
      <h2>Mastering Modern CSS Layout Systems</h2>
      <p>CSS Grid and Flexbox represent two different approaches to layout, each excelling in specific scenarios. Understanding their strengths is key to creating robust, maintainable layouts.</p>
      
      <h3>CSS Grid: Two-Dimensional Powerhouse</h3>
      <p>Grid is designed for two-dimensional layouts, making it ideal for overall page structure and complex component layouts.</p>
      
      <pre><code class="language-css">/* Advanced Grid layout with named areas */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: 80px 1fr 100px;
  grid-template-areas:
    "header header header"
    "sidebar main sidebar2"
    "footer footer footer";
  gap: 20px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.sidebar2 { grid-area: sidebar2; }
.footer { grid-area: footer; }</code></pre>
      
      <h3>Flexbox: One-Dimensional Precision</h3>
      <p>Flexbox excels at one-dimensional layouts and is perfect for component-level alignment and distribution.</p>
      
      <pre><code class="language-css">/* Complex card layout with Flexbox */
.card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #2a2a2a;
  border-radius: 12px;
}

.card-image {
  flex: 0 0 120px;
  border-radius: 8px;
  overflow: hidden;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}</code></pre>
    `,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-01-10",
    readTime: "4 min",
    category: "CSS",
  },
  {
    id: 2,
    slug: "javascript-advanced-array-methods",
    title: "Advanced JavaScript Array Methods: Beyond the Basics",
    excerpt:
      "Master modern JavaScript array methods with real-world examples and performance considerations for enterprise applications.",
    content: `
      <h2>Elevating Your Array Manipulation Skills</h2>
      <p>JavaScript arrays are more powerful than ever with ES6+ features. Understanding these methods deeply can significantly improve your code quality and performance.</p>
      
      <h3>Array.map(): Transformative Power</h3>
      <p>The map method creates a new array by applying a function to every element. It's perfect for data transformation pipelines.</p>
      
      <pre><code class="language-javascript">// Complex data transformation
const users = [
  { id: 1, name: 'John', age: 28, department: 'Engineering' },
  { id: 2, name: 'Jane', age: 32, department: 'Design' },
  { id: 3, name: 'Bob', age: 45, department: 'Marketing' }
];

const userSummaries = users.map(user => ({
  userId: user.id,
  displayName: \`\${user.name} (\${user.department})\`,
  isSenior: user.age > 30,
  contact: \`mailto:\${user.name.toLowerCase()}@company.com\`
}));

console.log(userSummaries);
// Output: Complex transformed objects with calculated properties</code></pre>
      
      <h3>Array.reduce(): The Ultimate Accumulator</h3>
      <p>Reduce is the most versatile array method, capable of implementing any list transformation.</p>
      
      <pre><code class="language-javascript"> // Complex reduction for data analysis
const sales = [
  { product: 'Laptop', amount: 1200, region: 'North' },
  { product: 'Mouse', amount: 25, region: 'North' },
  { product: 'Laptop', amount: 1100, region: 'South' },
  { product: 'Keyboard', amount: 75, region: 'South' }
];

const salesReport = sales.reduce((report, sale) => {
  // Initialize region if it doesn't exist
  if (!report[sale.region]) {
    report[sale.region] = { total: 0, products: {} };
  }
  
  // Update region total
  report[sale.region].total += sale.amount;
  
  // Update product sales within region
  if (!report[sale.region].products[sale.product]) {
    report[sale.region].products[sale.product] = 0;
  }
  report[sale.region].products[sale.product] += sale.amount;
  
  return report;
}, {});</code></pre>
    `,
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-02-25",
    readTime: "5 min",
    category: "JavaScript",
  },
  {
    id: 3,
    slug: "react-18-mastering-concurrent-rendering",
    title: "Mastering React 18: New Features and Best Practices",
    excerpt:
      "Deep dive into Concurrent Rendering, Automatic Batching, and the new hooks that will transform how you build React applications.",
    content: `
      <h2>Embracing the Future with React 18</h2>
      <p>React 18 represents a significant milestone in the evolution of the library, introducing groundbreaking features that enable developers to build more responsive and performant applications. Let's explore these features in depth.</p>
      
      <h3>Concurrent Rendering: A Game Changer</h3>
      <p>Concurrent rendering allows React to work on multiple state updates simultaneously, interrupting and resuming work as needed. This means your app can stay responsive even during expensive rendering operations.</p>
      
      <pre><code class="language-javascript">// Concurrent features in action
import { startTransition } from 'react';

// Urgent update: Show user input immediately
setInputValue(input);

// Mark non-urgent update as transition
startTransition(() => {
  setSearchQuery(input);
});</code></pre>
      
      <h3>Automatic Batching for Better Performance</h3>
      <p>React 18 automatically batches state updates, even in asynchronous operations like promises and timeouts. This reduces unnecessary re-renders and improves performance.</p>
      
      <pre><code class="language-javascript">// Before React 18: Multiple re-renders
setTimeout(() => {
  setName('John');
  setAge(30);
  setCity('New York');
}, 1000);

// React 18: Single re-render thanks to automatic batching
setTimeout(() => {
  setName('John');
  setAge(30);
  setCity('New York');
}, 1000);</code></pre>
      
      <h3>New Hooks for Advanced Use Cases</h3>
      <p>The introduction of useId, useTransition, useDeferredValue, and useSyncExternalStore hooks provides powerful tools for complex scenarios.</p>
      
      <pre><code class="language-javascript">import { useId, useTransition, useDeferredValue } from 'react';

function Form() {
  const id = useId(); // Unique ID generation
  const [isPending, startTransition] = useTransition();
  const deferredValue = useDeferredValue(searchTerm);
  
  return (
    <>
      <label htmlFor={id}>Search:</label>
      <input 
        id={id}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          startTransition(() => {
            // Non-urgent update
            updateSearchResults(e.target.value);
          });
        }}
      />
      {isPending && <Spinner />}
    </>
  );
}</code></pre>
      
      <h3>Server Components Revolution</h3>
      <p>React Server Components enable rendering components on the server, reducing bundle size and improving initial load performance.</p>
      
      <h2>Migration Strategy</h2>
      <p>Upgrading to React 18 is straightforward. Start by updating your React dependency and then gradually adopt new features as needed.</p>

      <pre><code class="language-javascript">// Using useSyncExternalStore for external state
import { useSyncExternalStore } from 'react';

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}</code></pre>
    `,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-03-20",
    readTime: "7 min",
    category: "React",
  },
  {
    id: 4,
    slug: "typescript-advanced-patterns",
    title: "TypeScript Advanced Patterns: From Beginner to Expert",
    excerpt:
      "Explore advanced TypeScript patterns, utility types, and architectural decisions that will elevate your TypeScript skills.",
    content: `
      <h2>Advanced TypeScript Mastery</h2>
      <p>TypeScript goes far beyond basic type annotations. Mastering advanced patterns can dramatically improve your code's safety, maintainability, and developer experience.</p>

      <h3>Advanced Utility Types</h3>
      <p>TypeScript's utility types provide powerful tools for type manipulation and transformation.</p>

      <pre><code class="language-typescript">// Conditional types with inference
type ArrayElement<T> = T extends (infer U)[] ? U : never;
type StringArrayElement = ArrayElement<string[]>; // string
type NumberArrayElement = ArrayElement<number[]>; // number

// Recursive types for complex structures
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface User {
  id: number;
  profile: {
    name: string;
    settings: {
      theme: string;
      notifications: boolean;
    };
  };
}

type PartialUser = DeepPartial<User>;
// All properties become optional, recursively

// Template literal types for string manipulation
type Route = \`/\${string}\`;
type ApiEndpoint = \`/api/\${string}\`;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type ApiRoute = \`\${HttpMethod} \${ApiEndpoint}\`;
const route: ApiRoute = 'GET /api/users'; // Valid</code></pre>

      <h3>Advanced Generic Constraints</h3>
      <p>Powerful generic constraints enable type-safe, flexible APIs.</p>

      <pre><code class="language-typescript">// Constraining generics with multiple conditions
type Serializable = string | number | boolean | null | undefined;

interface Storage {
  getItem<T extends Serializable>(key: string): T | null;
  setItem<T extends Serializable>(key: string, value: T): void;
}

// Conditional return types based on input
type ApiResponse<T, E extends boolean = false> = E extends true
  ? { error: string; data: null }
  : { error: null; data: T };

async function fetchData<T, E extends boolean = false>(
  url: string,
  options?: { throwOnError?: E }
): Promise<ApiResponse<T, E>> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { error: null, data } as ApiResponse<T, E>;
  } catch (error) {
    if (options?.throwOnError) {
      return { error: error.message, data: null } as ApiResponse<T, E>;
    }
    throw error;
  }
}

// Usage with type safety
const result = await fetchData<User[]>('/api/users');
const errorResult = await fetchData<User[], true>('/api/users', { throwOnError: true });</code></pre>

      <h3>Branded Types for Runtime Safety</h3>
      <p>Create nominal typing in TypeScript's structural type system for additional safety.</p>

      <pre><code class="language-typescript">// Branded types pattern
type Brand<T, B> = T & { __brand: B };
type UserId = Brand<string, 'UserId'>;
type Email = Brand<string, 'Email'>;

function createUserId(id: string): UserId {
  return id as UserId;
}

function createEmail(email: string): Email {
  if (!email.includes('@')) {
    throw new Error('Invalid email');
  }
  return email as Email;
}

// Now these are not interchangeable
const userId: UserId = createUserId('123');
const email: Email = createEmail('user@example.com');

// This would cause a type error:
// const invalid: UserId = email;</code></pre>

      <h3>Advanced Mapped Types</h3>
      <p>Mapped types enable powerful transformations of existing types.</p>

      <pre><code class="language-typescript">// Create type-safe event system
type EventMap = {
  click: { x: number; y: number };
  keypress: { key: string; code: number };
  submit: { data: FormData };
};

type EventHandlers<T> = {
  [K in keyof T as \`on\${Capitalize<string & K>}\`]: (event: T[K]) => void;
};

type AppEventHandlers = EventHandlers<EventMap>;
// {
//   onClick: (event: { x: number; y: number }) => void;
//   onKeypress: (event: { key: string; code: number }) => void;
//   onSubmit: (event: { data: FormData }) => void;
// }

// Conditional mapped types
type FilterReadonly<T> = {
  [K in keyof T as T[K] extends readonly any[] ? never : K]: T[K];
};

interface Config {
  readonly apiKeys: readonly string[];
  timeout: number;
  retries: number;
}

type MutableConfig = FilterReadonly<Config>;
// { timeout: number; retries: number }</code></pre>

      <h3>Decorators for Meta-Programming</h3>
      <p>TypeScript decorators enable powerful meta-programming patterns.</p>

      <pre><code class="language-typescript">// Class decorator for validation
function Validate<T extends new (...args: any[]) => any>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      this.validate();
    }

    validate() {
      const validationRules = (this as any).constructor.validationRules;
      if (validationRules) {
        for (const [prop, validator] of Object.entries(validationRules)) {
          if (!validator((this as any)[prop])) {
            throw new Error(\`Validation failed for \${prop}\`);
          }
        }
      }
    }
  };
}

// Property decorator
function Range(min: number, max: number) {
  return function (target: any, propertyKey: string) {
    const constructor = target.constructor;
    if (!constructor.validationRules) {
      constructor.validationRules = {};
    }
    constructor.validationRules[propertyKey] = (value: number) => 
      value >= min && value <= max;
  };
}

@Validate
class Product {
  @Range(1, 100)
  price: number;

  constructor(price: number) {
    this.price = price;
  }
}

// This will throw validation error
// const invalidProduct = new Product(150);</code></pre>

      <h3>Performance and Best Practices</h3>
      <p>Advanced TypeScript requires attention to performance and maintainability.</p>

      <pre><code class="language-typescript">// Avoid excessive type complexity
// ❌ Too complex
type OverlyComplex<T> = T extends infer U ? 
  U extends object ? 
    { [K in keyof U]: U[K] extends Function ? 
      never : U[K] 
    } : 
  never : 
never;

// ✅ Better approach
type SimpleObject<T> = T extends object ? {
  [K in keyof T as T[K] extends Function ? never : K]: T[K]
} : never;

// Use const assertions for better inference
const routes = [
  { path: '/home', component: HomePage },
  { path: '/about', component: AboutPage },
] as const;

type RoutePath = typeof routes[number]['path']; // '/home' | '/about'</code></pre>

      <h2>Architectural Patterns</h2>
      <p>Applying these patterns in real-world applications requires careful architectural decisions.</p>

      <pre><code class="language-typescript">// Repository pattern with type safety
interface Repository<T, ID> {
  findById(id: ID): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: ID): Promise<void>;
}

class UserRepository implements Repository<User, string> {
  async findById(id: string): Promise<User | null> {
    // Implementation
  }

  async save(user: User): Promise<User> {
    // Implementation
  }

  async delete(id: string): Promise<void> {
    // Implementation
  }
}

// Builder pattern for complex objects
class QueryBuilder<T> {
  private filters: ((item: T) => boolean)[] = [];
  private sortKey?: keyof T;
  private sortOrder: 'asc' | 'desc' = 'asc';

  where<P extends keyof T>(property: P, value: T[P]): this {
    this.filters.push(item => item[property] === value);
    return this;
  }

  orderBy(key: keyof T, order: 'asc' | 'desc' = 'asc'): this {
    this.sortKey = key;
    this.sortOrder = order;
    return this;
  }

  build(): (items: T[]) => T[] {
    return (items: T[]) => {
      let result = items.filter(item => 
        this.filters.every(filter => filter(item))
      );
      
      if (this.sortKey) {
        result.sort((a, b) => {
          const aVal = a[this.sortKey!];
          const bVal = b[this.sortKey!];
          return this.sortOrder === 'asc' ? 
            aVal < bVal ? -1 : 1 : 
            aVal > bVal ? -1 : 1;
        });
      }
      
      return result;
    };
  }
}</code></pre>
    `,
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-04-25",
    readTime: "9 min",
    category: "TypeScript",
  },
  {
    id: 5,
    slug: "react-19-revolutionizing-web-development-with-actions-and-async-rendering",
    title:
      "React 19: Revolutionizing Web Development with Actions and Async Rendering",
    excerpt:
      "Explore the groundbreaking features in React 19 - Actions, Async Transitions, Server Components, and how they transform modern web development.",
    content: `
    <h2>React 19: The Future of React is Here</h2>
    <p>React 19 represents the most significant update to React since the introduction of Hooks. With revolutionary features like Actions, enhanced Server Components, and improved performance, React 19 is set to redefine how we build web applications.</p>

    <h3>🚀 Actions: Simplifying Data Mutations</h3>
    <p>Actions are arguably the most exciting feature in React 19. They provide a standardized way to handle data mutations with built-in pending states, error handling, and optimistic updates.</p>

    <pre><code class="language-javascript">// Before React 19 - Manual state management
function UpdateProfile() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    try {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      redirect("/profile");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

// With React 19 Actions - Simplified
function UpdateProfile() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      redirect("/profile");
    });
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}</code></pre>

    <h3>🎯 useActionState: Unified Action Management</h3>
    <p>React 19 introduces <code>useActionState</code> to handle common Action patterns with even less boilerplate:</p>

    <pre><code class="language-javascript">// Using useActionState for form handling
function UpdateProfileForm() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get("name"));
      if (error) {
        return error;
      }
      redirect("/profile");
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}</code></pre>

    <h3>⚡ useOptimistic: Instant User Feedback</h3>
    <p>Provide immediate visual feedback while mutations are in progress:</p>

    <pre><code class="language-javascript">function LikeButton({ postId, initialLikes }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (currentLikes) => currentLikes + 1
  );

  const handleLike = async () => {
    addOptimisticLike();
    await likePost(postId);
  };

  return (
    <button onClick={handleLike}>
      👍 {optimisticLikes}
    </button>
  );
}</code></pre>

    <h3>🔮 use Hook: Revolutionary Resource Reading</h3>
    <p>The new <code>use</code> hook allows you to read resources directly in render, including promises and context:</p>

    <pre><code class="language-javascript">// Reading promises in render
function UserProfile({ userPromise }) {
  const user = use(userPromise);
  return <h1>Welcome, {user.name}!</h1>;
}

// Conditional context reading
function ThemeAwareHeading({ children }) {
  if (!children) return null;
  
  const theme = use(ThemeContext);
  return (
    <h1 style={{ color: theme.color }}>
      {children}
    </h1>
  );
}</code></pre>

    <h3>🌐 Server Components: Production Ready</h3>
    <p>React 19 stabilizes Server Components, enabling true full-stack React applications:</p>

    <pre><code class="language-javascript">// Server Component - runs on the server
async function ProductPage({ productId }) {
  const product = await db.products.find(productId);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <Price client:load price={product.price} />
    </div>
  );
}

// Client Component - runs on the client
'use client';
function Price({ price }) {
  const [formattedPrice, setFormattedPrice] = useState(price);
  
  useEffect(() => {
    setFormattedPrice(formatCurrency(price));
  }, [price]);
  
  return <span>{formattedPrice}</span>;
}</code></pre>

    <h3>🛠️ Server Actions: Client-to-Server Communication</h3>
    <p>Server Actions allow client components to call async functions that execute on the server:</p>

    <pre><code class="language-javascript">// Server Action
async function addToCart(productId) {
  'use server';
  await db.cart.add(productId);
  revalidatePath('/cart');
}

// Client Component using Server Action
function AddToCartButton({ productId }) {
  return (
    <button onClick={() => addToCart(productId)}>
      Add to Cart
    </button>
  );
}</code></pre>

    <h3>🎨 Built-in Document Metadata Support</h3>
    <p>React 19 natively supports rendering document metadata tags anywhere in your component tree:</p>

    <pre><code class="language-javascript">function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <meta name="keywords" content={post.keywords.join(',')} />
      <link rel="canonical" href={post.canonicalUrl} />
      <p>{post.content}</p>
    </article>
  );
}</code></pre>

    <h3>🚀 Performance Improvements</h3>
    <p>React 19 brings significant performance enhancements:</p>

    <pre><code class="language-javascript">// Concurrent Features by Default
function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query, '');
  
  return (
    <div>
      <SearchInput value={query} />
      <Suspense fallback={<div>Loading...</div>}>
        <Results query={deferredQuery} />
      </Suspense>
    </div>
  );
}

// Improved Hydration Errors
// React 19 provides detailed diffs for hydration mismatches
// making debugging much easier</code></pre>

    <h3>🔧 Developer Experience Enhancements</h3>
    <p>Several quality-of-life improvements make development more enjoyable:</p>

    <pre><code class="language-javascript">// ref as prop - no more forwardRef
function MyInput({ placeholder, ref }) {
  return <input placeholder={placeholder} ref={ref} />;
}

// Cleanup functions for refs
function MeasurableComponent() {
  return (
    <div ref={(element) => {
      if (!element) return;
      
      const observer = new ResizeObserver(handleResize);
      observer.observe(element);
      
      return () => observer.disconnect();
    }} />
  );
}

// Simplified Context Providers
function App({ children }) {
  return (
    <ThemeContext value="dark">
      {children}
    </ThemeContext>
  );
}</code></pre>

    <h2>Migration Strategy</h2>
    <p>Upgrading to React 19 is designed to be smooth. Here's your migration checklist:</p>

    <ol>
      <li><strong>Update Dependencies</strong>: Upgrade React to v19 and React DOM to v19</li>
      <li><strong>Adopt Actions Gradually</strong>: Start converting complex state mutations to use Actions</li>
      <li><strong>Explore Server Components</strong>: If using a framework that supports them, experiment with Server Components</li>
      <li><strong>Remove forwardRef</strong>: Use the codemod to update function components to use ref as a prop</li>
      <li><strong>Update Context Usage</strong>: Replace Context.Provider with Context</li>
    </ol>

    <h2>Conclusion</h2>
    <p>React 19 marks a significant evolution in the React ecosystem. With Actions simplifying data mutations, Server Components enabling true full-stack development, and numerous developer experience improvements, React continues to lead the way in modern web development.</p>

    <p>The focus on reducing boilerplate, improving performance, and providing better built-in solutions for common patterns makes React 19 the most productive version yet. Whether you're building a small interactive widget or a large-scale enterprise application, React 19 has features that will make your development experience better and your applications faster.</p>

    <p><strong>Ready to upgrade?</strong> Check out the official <a href="https://react.dev/blog/2024/04/25/react-19" target="_blank">React 19 Upgrade Guide</a> for detailed migration instructions.</p>
  `,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-05-05",
    readTime: "10 min",
    category: "React",
  },
  {
    id: 6,
    slug: "nextjs-14-server-actions-app-router-mastery",
    title:
      "Next.js 14 Mastery: Server Actions, App Router & Performance Optimization",
    excerpt:
      "Comprehensive guide to Next.js 14's revolutionary features including Server Actions, Streaming, and Advanced App Router patterns.",
    content: `
    <h2>Next.js 14: The Full-Stack Framework Revolution</h2>
    <p>Next.js 14 represents a paradigm shift in full-stack development. With Server Actions, Partial Prerendering, and enhanced performance optimizations, it's redefining what's possible with React-based applications.</p>

    <h3>🚀 Server Actions: Full-Stack React Simplified</h3>
    <p>Server Actions enable you to call server functions directly from client components, eliminating API routes for simple operations.</p>

    <pre><code class="language-javascript">// app/actions/user.ts
'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export async function updateUserProfile(
  userId: string,
  formData: FormData
) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  try {
    await db.user.update({
      where: { id: userId },
      data: { name, email }
    });

    revalidatePath('/profile/[id]', 'page');
    return { success: true, message: 'Profile updated' };
  } catch (error) {
    return { success: false, error: 'Update failed' };
  }
}

// app/components/ProfileForm.tsx
'use client';

import { updateUserProfile } from '@/app/actions/user';
import { useActionState, useEffect } from 'react';

export function ProfileForm({ userId }: { userId: string }) {
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      return await updateUserProfile(userId, formData);
    },
    null
  );

  useEffect(() => {
    if (state?.success) {
      // Show success toast
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-4">
      <input 
        name="name" 
        placeholder="Name" 
        className="border p-2 rounded w-full"
      />
      <input 
        name="email" 
        type="email" 
        placeholder="Email"
        className="border p-2 rounded w-full"
      />
      <button 
        type="submit" 
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isPending ? 'Updating...' : 'Update Profile'}
      </button>
      {state?.error && (
        <p className="text-red-600">{state.error}</p>
      )}
    </form>
  );
}</code></pre>

    <h3>⚡ Partial Prerendering (PPR): Hybrid Rendering at Scale</h3>
    <p>PPR combines static and dynamic rendering intelligently, delivering optimal performance for complex applications.</p>

    <pre><code class="language-javascript">// app/products/[id]/page.tsx
import { Suspense } from 'react';
import { getProduct, getRelatedProducts } from '@/lib/products';
import ProductDetails from './components/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import ProductReviews from './components/ProductReviews';

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // Static data - prerendered
  const product = await getProduct(params.id);

  return (
    <div className="container mx-auto p-4">
      {/* Static section */}
      <ProductDetails product={product} />

      {/* Dynamic sections with Suspense boundaries */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <Suspense fallback={<RelatedProductsSkeleton />}>
          <RelatedProducts productId={params.id} />
        </Suspense>

        <div className="lg:col-span-2">
          <Suspense fallback={<ReviewsSkeleton />}>
            <ProductReviews productId={params.id} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

// app/components/RelatedProducts.tsx
export async function RelatedProducts({ productId }: { productId: string }) {
  // This data is fetched on-demand
  const relatedProducts = await getRelatedProducts(productId);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Related Products</h3>
      <div className="space-y-2">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}</code></pre>

    <h3>📊 Advanced Data Fetching Strategies</h3>
    <p>Next.js 14 introduces sophisticated caching and data fetching patterns for optimal performance.</p>

    <pre><code class="language-javascript">// lib/data-fetching.ts
import { unstable_cache } from 'next/cache';
import { revalidateTag } from 'next/cache';

// Cached database queries
export const getCachedProducts = unstable_cache(
  async (category: string) => {
    console.log('Fetching products from database...');
    return await db.product.findMany({
      where: { category },
      orderBy: { createdAt: 'desc' },
    });
  },
  ['products', 'category'], // Cache key parts
  {
    tags: ['products'], // Revalidation tags
    revalidate: 3600, // 1 hour
  }
);

// Time-based revalidation
export const getPopularProducts = unstable_cache(
  async () => {
    return await db.product.findMany({
      where: {
        views: { gt: 1000 },
        createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
      },
      take: 10,
    });
  },
  ['popular-products'],
  { revalidate: 1800 } // 30 minutes
);

// Manual revalidation
export async function invalidateProductsCache() {
  revalidateTag('products');
}</code></pre>

    <h3>🎨 Advanced App Router Patterns</h3>
    <p>Master complex routing scenarios with parallel routes, intercepting routes, and route groups.</p>

    <pre><code class="language-javascript">// app/(dashboard)/@analytics/page.tsx
// Parallel route - renders alongside main content
export default async function AnalyticsDashboard() {
  const analytics = await getAnalyticsData();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Analytics</h3>
      <div className="space-y-4">
        <MetricCard title="Visitors" value={analytics.visitors} />
        <MetricCard title="Conversion" value={analytics.conversion} />
        <MetricCard title="Revenue" value={analytics.revenue} />
      </div>
    </div>
  );
}

// app/products/[id]/@modal/(.)edit/page.tsx
// Intercepting route - modal overlay
export default function EditProductModal({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <EditProductForm productId={params.id} />
      </div>
    </div>
  );
}

// app/api/upload/route.ts
// Streaming file uploads
export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  const uploadStream = createWriteStream(\`./uploads/\${file.name}\`);

  // Stream the file content
  const reader = file.stream().getReader();
  
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    uploadStream.write(value);
  }
  
  uploadStream.end();

  return Response.json({ success: true });
}</code></pre>

    <h3>🔧 Performance Monitoring & Optimization</h3>
    <p>Advanced techniques for monitoring and optimizing Next.js applications.</p>

    <pre><code class="language-javascript">// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

// middleware.ts - Advanced caching and security
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Cache static assets
  if (request.nextUrl.pathname.startsWith('/_next/static')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  // API response caching
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
  }

  return response;
}</code></pre>

    <h2>Vercel Integration & Deployment</h2>
    <p>Leverage Vercel's platform for optimal Next.js 14 deployments.</p>

    <pre><code class="language-javascript">// vercel.json
{
  "version": 2,
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["fra1"], // Frankfurt for EU users
  "env": {
    "DATABASE_URL": "@database_url"
  },
  "build": {
    "env": {
      "NEXT_PUBLIC_ANALYTICS_ID": "@analytics_id"
    }
  },
  "git": {
    "deploymentEnabled": {
      "main": true,
      "preview": true
    }
  }
}

// next.config.js
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;</code></pre>

    <h2>Conclusion</h2>
    <p>Next.js 14 represents the pinnacle of full-stack React development. With Server Actions eliminating API boilerplate, Partial Prerendering delivering unprecedented performance, and advanced routing patterns enabling complex application architectures, it's never been easier to build production-ready applications.</p>
  `,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2024-06-15",
    readTime: "12 min",
    category: "Next.js",
  },
  {
    id: 7,
    slug: "ai-modern-web-apps-vercel-openai",
    title: "AI Integration: Vercel AI SDK & OpenAI for Web Apps",
    excerpt:
      "Build AI-powered web applications with Vercel AI SDK, OpenAI, and real-time streaming for modern user experiences.",
    content: `
    <h2>AI in Web Applications</h2>
    <p>Learn how to integrate AI features into your web applications using modern tools and best practices.</p>

    <h3>Vercel AI SDK Setup</h3>
    <p>Getting started with Vercel AI SDK for unified AI interactions.</p>

    <pre><code class="language-javascript">// Install dependencies
// npm install ai openai @ai-sdk/react

// lib/ai/config.js
import { OpenAI } from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});</code></pre>

    <h3>Simple Chat Interface</h3>
    <p>Create a basic AI chat interface with streaming responses.</p>

    <pre><code class="language-javascript">// app/api/chat/route.js
import { openai } from '@/lib/ai/config';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export async function POST(req) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

// app/components/Chat.jsx
'use client';

import { useChat } from 'ai/react';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-[500px] border rounded-lg">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map(m => (
          <div key={m.id} className="mb-2">
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}</code></pre>

    <h3>AI-Powered Form Generation</h3>
    <p>Generate forms dynamically based on user descriptions.</p>

    <pre><code class="language-javascript">// app/api/generate-form/route.js
import { openai } from '@/lib/ai/config';

export async function POST(req) {
  const { description } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: \`Create a form for: \${description}. Return JSON with fields array.\`
    }],
  });

  return Response.json({ 
    form: JSON.parse(response.choices[0].message.content) 
  });
}</code></pre>

    <h3>Rate Limiting for AI Endpoints</h3>
    <p>Protect your AI endpoints from abuse with rate limiting.</p>

    <pre><code class="language-javascript">// lib/rate-limit.js
export class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  check(ip) {
    const now = Date.now();
    const userRequests = this.requests.get(ip) || [];
    
    // Remove old requests
    const validRequests = userRequests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false; // Rate limited
    }
    
    validRequests.push(now);
    this.requests.set(ip, validRequests);
    return true;
  }
}</code></pre>

    <h3>Environment Configuration</h3>
    <p>Set up proper environment variables for AI services.</p>

    <pre><code class="language-bash"># .env.local
OPENAI_API_KEY=your_key_here
NEXT_PUBLIC_AI_ENABLED=true
AI_MAX_TOKENS=1000
AI_TEMPERATURE=0.7</code></pre>

    <h2>Best Practices</h2>
    <ul>
      <li>Always validate user input before sending to AI</li>
      <li>Implement proper error handling</li>
      <li>Use streaming for better UX</li>
      <li>Cache common AI responses</li>
      <li>Monitor API usage and costs</li>
    </ul>

    <p>AI integration can transform your web applications, making them more interactive and intelligent.</p>
  `,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2025-01-10",
    readTime: "6 min",
    category: "AI",
  },

  {
    id: 8,
    slug: "tailwind-css-mastery-advanced-patterns-best-practices",
    title:
      "Tailwind CSS Mastery: Advanced Patterns, Performance & Best Practices",
    excerpt:
      "Go beyond the basics with advanced Tailwind CSS techniques, performance optimization, and production-ready patterns for 2024.",
    content: `
    <h2>Beyond Utility Classes: Advanced Tailwind CSS Mastery</h2>
    <p>Tailwind CSS has evolved from a simple utility-first framework to a comprehensive design system. Let's explore advanced patterns that will elevate your styling skills to professional level.</p>

    <h3>🚀 Advanced Configuration & Customization</h3>
    <p>Tailwind's true power lies in its extensibility. Customize it to match your design system perfectly.</p>

    <pre><code class="language-javascript">// tailwind.config.js - Advanced configuration
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'], // Multiple dark mode strategies
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Advanced color system with semantic names
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... up to 900
          DEFAULT: '#3b82f6', // primary
          dark: '#1d4ed8',    // primary-dark
        },
        semantic: {
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
        },
      },
      
      // Advanced spacing scale
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'screen-sm': '640px',
        'screen-md': '768px',
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      // Keyframes for custom animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      // Advanced typography
      fontSize: {
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem',   // 8px
        'display-lg': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      
      // Container queries support
      containers: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    
    // Custom plugin for advanced utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-balance': {
          textWrap: 'balance',
        },
        '.text-pretty': {
          textWrap: 'pretty',
        },
        '.glass-effect': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};</code></pre>

    <h3>🎨 Advanced Layout Patterns</h3>
    <p>Master complex layouts with advanced Grid and Flexbox patterns.</p>

    <pre><code class="language-html">&lt;!-- Advanced Grid Layouts --&gt;
&lt;div class="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8"&gt;
  &lt;!-- Sidebar with responsive behavior --&gt;
  &lt;aside class="col-span-12 md:col-span-3 lg:col-span-2 
                sticky top-0 h-screen overflow-y-auto 
                scrollbar-hide bg-gray-50 dark:bg-gray-900"&gt;
    &lt;!-- Sidebar content --&gt;
  &lt;/aside&gt;
  
  &lt;!-- Main content area --&gt;
  &lt;main class="col-span-12 md:col-span-9 lg:col-span-8 
               space-y-6 md:space-y-8"&gt;
    &lt;!-- Hero section with complex grid --&gt;
    &lt;section class="grid grid-cols-1 lg:grid-cols-2 gap-6 
                    items-center min-h-[80vh]"&gt;
      &lt;div class="space-y-4"&gt;
        &lt;h1 class="text-4xl md:text-5xl lg:text-6xl 
                   font-bold tracking-tight"&gt;
          Advanced Tailwind
        &lt;/h1&gt;
        &lt;p class="text-lg text-gray-600 dark:text-gray-300"&gt;
          Master complex layouts
        &lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="relative"&gt;
        &lt;div class="absolute inset-0 bg-gradient-to-r 
                     from-blue-500 to-purple-500 
                     rounded-2xl transform rotate-3"&gt;&lt;/div&gt;
        &lt;div class="relative bg-white dark:bg-gray-800 
                     p-8 rounded-2xl shadow-2xl"&gt;
          &lt;!-- Content --&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  &lt;/main&gt;
  
  &lt;!-- Right sidebar --&gt;
  &lt;aside class="hidden lg:block col-span-2 
                space-y-4"&gt;
    &lt;!-- Widgets --&gt;
  &lt;/aside&gt;
&lt;/div&gt;

&lt;!-- Masonry Layout with columns --&gt;
&lt;div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"&gt;
  &lt;div class="break-inside-avoid bg-white dark:bg-gray-800 
              rounded-lg p-4 shadow-lg"&gt;
    &lt;!-- Card content --&gt;
  &lt;/div&gt;
  &lt;!-- More cards --&gt;
&lt;/div&gt;

&lt;!-- Advanced Flexbox patterns --&gt;
&lt;div class="flex flex-col md:flex-row gap-4 items-stretch"&gt;
  &lt;div class="flex-1 flex flex-col"&gt;
    &lt;div class="flex-1 bg-gray-100 dark:bg-gray-800 
                rounded-lg p-4"&gt;
      Content that stretches
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="flex-none w-full md:w-64 
              flex flex-col justify-between"&gt;
    &lt;!-- Fixed width sidebar --&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <h3>⚡ Performance Optimization</h3>
    <p>Optimize Tailwind CSS for production with these advanced techniques.</p>

    <pre><code class="language-javascript">// PostCSS configuration for optimization
// postcss.config.js
module.exports = {
  plugins: {
    'tailwindcss/nesting': {}, // Enable nesting
    tailwindcss: {},
    autoprefixer: {},
    
    // Production optimizations
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './src/**/*.{js,ts,jsx,tsx}',
              './app/**/*.{js,ts,jsx,tsx}',
            ],
            safelist: [
              /^bg-/,      // Keep all background colors
              /^text-/,    // Keep all text colors
              /^border-/,  // Keep all border colors
              /^hover:/,   // Keep hover states
              /^focus:/,   // Keep focus states
              /^dark:/,    // Keep dark mode variants
            ],
            defaultExtractor: content => 
              content.match(/[\\w\\-:\\/]+/g) || [],
          },
          'cssnano': {
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: false,
            }],
          },
        }
      : {}),
  },
};

// Advanced JIT mode configuration
// tailwind.config.js - Optimized for JIT
module.exports = {
  mode: 'jit', // Just-in-Time mode
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    
    // Advanced extraction patterns
    options: {
      safelist: [
        'bg-blue-500',
        'text-red-500',
        // Dynamic class patterns
        /^bg-(red|blue|green)-(100|500|900)$/,
        /^text-(xs|sm|base|lg|xl)$/,
        /^grid-cols-(1|2|3|4)$/,
      ],
      
      // Extract classes from dynamic strings
      extractors: [
        {
          extractor: (content) => 
            content.match(/[\\w\\-:\\/]+/g) || [],
          extensions: ['js', 'jsx', 'ts', 'tsx'],
        },
      ],
    },
  },
  
  // Optimize for tree-shaking
  corePlugins: {
    // Disable unused core plugins
    float: false,
    clear: false,
    skew: false,
  },
};</code></pre>

    <h3>🎭 Advanced Responsive & State Variants</h3>
    <p>Master responsive design with advanced breakpoints and state management.</p>

    <pre><code class="language-html">&lt;!-- Advanced responsive patterns --&gt;
&lt;div class="
  /* Mobile first */
  flex flex-col gap-2 p-4
  
  /* Small screens */
  sm:flex-row sm:gap-4 sm:p-6
  
  /* Medium screens */
  md:grid md:grid-cols-2 md:gap-6 md:p-8
  
  /* Large screens */
  lg:grid-cols-3 lg:gap-8 lg:p-10
  
  /* Extra large */
  xl:grid-cols-4 xl:gap-10
  
  /* 2XL and beyond */
  2xl:grid-cols-5 2xl:gap-12
"&gt;
  &lt;!-- Content adapts to all screen sizes --&gt;
&lt;/div&gt;

&lt;!-- Container queries with Tailwind --&gt;
&lt;div class="@container"&gt;
  &lt;div class="@lg:flex @lg:gap-4"&gt;
    &lt;!-- Styles change based on container width --&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Advanced state variants --&gt;
&lt;button class="
  /* Base styles */
  px-6 py-3 rounded-lg font-medium
  transition-all duration-300 ease-out
  
  /* Default state */
  bg-blue-500 text-white
  hover:bg-blue-600 
  hover:scale-105
  hover:shadow-lg
  hover:shadow-blue-500/30
  
  /* Active/click state */
  active:bg-blue-700
  active:scale-95
  
  /* Focus state */
  focus:outline-none
  focus:ring-4
  focus:ring-blue-500/50
  focus:ring-offset-2
  
  /* Disabled state */
  disabled:opacity-50
  disabled:cursor-not-allowed
  disabled:hover:scale-100
  disabled:hover:bg-blue-500
  
  /* Dark mode */
  dark:bg-blue-600
  dark:hover:bg-blue-700
  dark:focus:ring-blue-600/50
  
  /* Reduced motion */
  motion-reduce:transition-none
  motion-reduce:hover:scale-100
  
  /* Print styles */
  print:text-black
  print:bg-transparent
  print:border
"&gt;
  Advanced Button
&lt;/button&gt;

&lt;!-- Group hover states --&gt;
&lt;div class="group relative"&gt;
  &lt;div class="
    opacity-0 
    group-hover:opacity-100
    group-focus-within:opacity-100
    transition-opacity duration-300
    absolute inset-0 bg-black/50
  "&gt;&lt;/div&gt;
  &lt;div class="
    transform 
    group-hover:scale-110
    transition-transform duration-300
  "&gt;
    Content
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <h3>🔄 Dynamic Classes & Runtime Styles</h3>
    <p>Handle dynamic styles safely and efficiently.</p>

    <pre><code class="language-javascript">// React component with dynamic Tailwind classes
function DynamicCard({ variant = 'default', isLoading = false }) {
  // Safely build dynamic classes
  const baseClasses = "p-6 rounded-lg transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    primary: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800",
    success: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800",
    error: "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800",
  };
  
  const stateClasses = isLoading 
    ? "opacity-50 cursor-wait" 
    : "hover:shadow-lg hover:-translate-y-1";
  
  // Safely combine classes
  const cardClasses = \`
    \${baseClasses}
    \${variantClasses[variant] || variantClasses.default}
    \${stateClasses}
  \`.trim();
  
  return (
    <div className={cardClasses}>
      {isLoading ? (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      ) : (
        <div>Content</div>
      )}
    </div>
  );
}

// Utility for safe class concatenation
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Usage with conditional classes
function Alert({ type, children }) {
  return (
    <div className={cn(
      "p-4 rounded-lg border",
      type === 'success' && "bg-green-50 border-green-200 text-green-800",
      type === 'error' && "bg-red-50 border-red-200 text-red-800",
      type === 'warning' && "bg-yellow-50 border-yellow-200 text-yellow-800",
      type === 'info' && "bg-blue-50 border-blue-200 text-blue-800",
    )}>
      {children}
    </div>
  );
}</code></pre>

    <h3>🎯 Design Token System with Tailwind</h3>
    <p>Create a consistent design system using Tailwind's configuration.</p>

    <pre><code class="language-javascript">// design-tokens.js - Centralized design tokens
export const designTokens = {
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
  },
  
  borderRadius: {
    sm: '0.125rem',  // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  transitions: {
    DEFAULT: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '100ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Apply to Tailwind config
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: designTokens.spacing,
      borderRadius: designTokens.borderRadius,
      boxShadow: designTokens.shadows,
      transitionTimingFunction: {
        'in-out': designTokens.transitions.DEFAULT,
      },
    },
  },
};</code></pre>

    <h3>🔧 Advanced Plugin Development</h3>
    <p>Create custom Tailwind plugins for reusable patterns.</p>

    <pre><code class="language-javascript">// plugins/advanced-utilities.js
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme, e }) {
  const newUtilities = {
    // Text gradients
    '.text-gradient': {
      background: 'linear-gradient(to right, var(--tw-gradient-stops))',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'background-clip': 'text',
    },
    
    // Custom scrollbar
    '.scrollbar-custom': {
      '&::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
      },
      '&::-webkit-scrollbar-track': {
        background: theme('colors.gray.100'),
        borderRadius: '4px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme('colors.gray.400'),
        borderRadius: '4px',
        '&:hover': {
          background: theme('colors.gray.500'),
        },
      },
    },
    
    // Aspect ratio containers
    '.aspect-card': {
      aspectRatio: '3 / 4',
    },
    '.aspect-banner': {
      aspectRatio: '16 / 9',
    },
    
    // Advanced positioning
    '.center-absolute': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    
    // Glass morphism
    '.glass': {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    
    // Custom animations
    '.animate-float': {
      animation: 'float 3s ease-in-out infinite',
    },
  };
  
  // Add keyframes for custom animations
  const keyframes = {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  };
  
  addUtilities(newUtilities);
  addUtilities({
    '@keyframes float': keyframes.float,
  });
}, {
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
});</code></pre>

    <h2>Best Practices Summary</h2>
    <ol>
      <li><strong>Use JIT Mode:</strong> Always enable Just-in-Time mode for optimal performance</li>
      <li><strong>Extract Components:</strong> Create reusable component classes for repeated patterns</li>
      <li><strong>Leverage Configuration:</strong> Customize Tailwind to match your design system</li>
      <li><strong>Optimize for Production:</strong> Use PurgeCSS and minification in production</li>
      <li><strong>Maintain Consistency:</strong> Establish and follow naming conventions</li>
      <li><strong>Use Plugins Wisely:</strong> Add plugins only when needed</li>
      <li><strong>Test Responsiveness:</strong> Test on all breakpoints</li>
      <li><strong>Accessibility First:</strong> Ensure all styles are accessible</li>
    </ol>

    <p>Mastering these advanced Tailwind CSS techniques will transform you from a utility class user to a design system architect, capable of building consistent, performant, and maintainable interfaces at scale.</p>
  `,
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "2025-2-15",
    readTime: "12 min",
    category: "CSS",
  },
];
