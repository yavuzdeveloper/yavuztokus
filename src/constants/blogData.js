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
    date: "2024-01-15",
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
    date: "2024-01-20",
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
    date: "2024-01-25",
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
    date: "2024-12-05",
    readTime: "10 min",
    category: "React",
  },
];
