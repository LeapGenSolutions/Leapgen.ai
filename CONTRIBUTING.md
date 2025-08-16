# Contributing to LeapGen.AI

Thank you for your interest in contributing to LeapGen.AI! This guide outlines our development process and standards.

## Development Environment

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher
- **Git**: Latest version
- **VS Code**: Recommended with extensions

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd leapgen-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

### Recommended VS Code Extensions
- **TypeScript**: Enhanced TypeScript support
- **Tailwind CSS IntelliSense**: Autocomplete for Tailwind classes
- **ES7+ React/Redux/React-Native snippets**: React code snippets
- **Prettier**: Code formatting
- **ESLint**: Code linting

## Development Workflow

### Branch Strategy
- **main**: Production-ready code
- **develop**: Integration branch for features
- **feature/***: Individual feature development
- **hotfix/***: Critical production fixes

### Feature Development
```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes and commit
git add .
git commit -m "feat: add new component"

# Push and create pull request
git push origin feature/new-component
```

## Code Standards

### TypeScript Guidelines
- **Strict Mode**: Enable all TypeScript strict checks
- **Type Definitions**: Explicit types for all function parameters and returns
- **Interfaces**: Use interfaces for object shapes
- **Enums**: Use const assertions instead of enums where possible

```typescript
// ✅ Good
interface UserProps {
  name: string;
  email: string;
  isActive: boolean;
}

const getUser = (id: string): Promise<UserProps> => {
  // implementation
};

// ❌ Bad
const getUser = (id) => {
  // missing types
};
```

### React Component Guidelines
- **Functional Components**: Use function components with hooks
- **Props Interface**: Define explicit prop interfaces
- **Default Props**: Use destructuring with defaults
- **Naming**: PascalCase for components, camelCase for functions

```typescript
// ✅ Good
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}: ButtonProps) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### CSS/Tailwind Guidelines
- **Design Tokens**: Use semantic tokens from index.css
- **Component Variants**: Use CVA for component styling
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Support both light and dark themes

```typescript
// ✅ Good - Using design tokens
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-11 px-8",
      },
    },
  }
);

// ❌ Bad - Direct colors
className="bg-blue-500 text-white hover:bg-blue-600"
```

## Testing Requirements

### Unit Tests
- **Coverage**: Minimum 80% test coverage
- **Testing Library**: Use React Testing Library
- **Mock Strategy**: Mock external dependencies

```typescript
// Example test
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Integration Tests
- **User Flows**: Test complete user interactions
- **API Integration**: Mock API responses
- **Router Testing**: Test navigation flows

### E2E Tests (Optional)
- **Critical Paths**: Test main user journeys
- **Cross-Browser**: Test in multiple browsers
- **Mobile Testing**: Test responsive behavior

## Commit Message Guidelines

### Format
```
type(scope): subject

body

footer
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```
feat(auth): add user authentication system

Implement JWT-based authentication with login/logout functionality.
Includes protected routes and session management.

Closes #123
```

```
fix(ui): resolve button hover state issue

Button hover states were not working correctly in dark mode.
Updated CSS variables to use proper semantic tokens.

Fixes #456
```

## Performance Guidelines

### Bundle Size
- **Component Size**: Keep components under 10KB
- **Lazy Loading**: Use React.lazy for route components
- **Tree Shaking**: Ensure imports are tree-shakeable

### Core Web Vitals
- **FCP**: First Contentful Paint < 1.5s
- **LCP**: Largest Contentful Paint < 2.5s
- **CLS**: Cumulative Layout Shift < 0.1
- **FID**: First Input Delay < 100ms

### Images
- **Optimization**: Use WebP format with fallbacks
- **Lazy Loading**: Implement intersection observer
- **Responsive**: Use responsive image techniques

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 ratio
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators

### Implementation
```typescript
// ✅ Good - Accessible button
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  aria-controls="dialog-content"
  onClick={handleClose}
>
  <X aria-hidden="true" />
</button>

// ❌ Bad - Not accessible
<div onClick={handleClose}>
  <X />
</div>
```

## Security Guidelines

### Input Validation
- **Sanitization**: Sanitize all user inputs
- **Validation**: Use Zod for schema validation
- **XSS Prevention**: Avoid dangerouslySetInnerHTML

### Content Security Policy
- **Strict CSP**: Implement strict content security policy
- **No Inline Scripts**: Avoid inline JavaScript
- **Trusted Sources**: Only allow trusted external resources

## Pull Request Process

### Checklist
- [ ] **Tests**: All tests pass
- [ ] **Linting**: No ESLint errors
- [ ] **Types**: No TypeScript errors
- [ ] **Performance**: No performance regressions
- [ ] **Accessibility**: WCAG compliance verified
- [ ] **Documentation**: Updated if necessary

### Review Process
1. **Self Review**: Review your own code first
2. **Automated Checks**: Ensure CI passes
3. **Peer Review**: At least one team member approval
4. **Testing**: Deploy to staging for validation

### Merge Requirements
- **Passing CI**: All automated checks must pass
- **Approvals**: Minimum one approval required
- **Up to Date**: Branch must be up to date with main
- **No Conflicts**: Resolve merge conflicts before merge

## Documentation Standards

### Code Documentation
- **JSDoc**: Document complex functions and components
- **README**: Update README for new features
- **API Documentation**: Document any API changes

### Component Documentation
```typescript
/**
 * Primary button component for user actions
 * 
 * @param variant - Visual style variant
 * @param size - Button size
 * @param children - Button content
 * @param onClick - Click handler
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Submit Form
 * </Button>
 * ```
 */
const Button = ({ variant, size, children, onClick }: ButtonProps) => {
  // implementation
};
```

## Release Process

### Versioning
- **Semantic Versioning**: MAJOR.MINOR.PATCH
- **Release Notes**: Document all changes
- **Migration Guides**: Provide upgrade instructions

### Deployment
1. **Feature Freeze**: No new features during release
2. **Testing**: Comprehensive testing on staging
3. **Documentation**: Update all documentation
4. **Deploy**: Automated deployment to production
5. **Monitoring**: Monitor post-deployment metrics

## Support

### Getting Help
- **Documentation**: Check existing documentation first
- **Discussions**: GitHub Discussions for questions
- **Issues**: GitHub Issues for bugs and feature requests
- **Team Chat**: Internal team communication channels

### Reporting Issues
- **Bug Reports**: Use bug report template
- **Feature Requests**: Use feature request template
- **Security Issues**: Email security@leapgen.ai
- **Performance Issues**: Include performance profiling data

Thank you for contributing to LeapGen.AI! 🚀