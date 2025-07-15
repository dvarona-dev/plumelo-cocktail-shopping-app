import { css } from "@pionjs/pion";

// Base Layout Styles
export const containerStyles = css`
  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
    margin: 0 auto;
    padding: 2rem;
    background: var(--surface-color);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
  }

  .main-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .results-container {
    display: grid;
    grid-template-columns: 1fr 350px;
    gap: 2rem;
    align-items: start;
  }

  @media (max-width: 1024px) {
    .results-container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;

// Typography Styles
export const typographyStyles = css`
  .container h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
    background: linear-gradient(
      135deg,
      var(--primary-color),
      var(--info-color)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .container h1::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(
      135deg,
      var(--primary-color),
      var(--info-color)
    );
    margin: 1rem auto;
    border-radius: 2px;
  }

  .result-item h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .result-item p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .shopping-list h3 {
    margin: 0 0 1rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .shopping-list h3::before {
    content: "🛒";
    font-size: 1.5rem;
  }

  .ingredient-name {
    font-weight: 500;
    color: var(--text-primary);
  }

  .ingredient-measure {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-style: italic;
  }
`;

// Form and Input Styles
export const formStyles = css`
  .search-container {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .search-container input {
    flex: 1;
    min-width: 250px;
    padding: 0.875rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: var(--radius-md);
    font-size: 1rem;
    transition: var(--transition);
    background: var(--surface-color);
    color: var(--text-primary);
  }

  .search-container input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgb(37 99 235 / 0.1);
  }

  .search-container input::placeholder {
    color: var(--text-muted);
  }
`;

// Button Styles
export const buttonStyles = css`
  .btn {
    padding: 0.875rem 1.5rem;
    border: none;
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    white-space: nowrap;
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-primary {
    background: var(--primary-color);
    color: white;
  }

  .btn-primary:hover:not(:disabled) {
    background: var(--primary-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }

  .btn-secondary {
    background: var(--surface-color);
    color: var(--text-secondary);
    border: 2px solid var(--border-color);
  }

  .btn-secondary:hover:not(:disabled) {
    background: var(--surface-hover);
    border-color: var(--text-secondary);
  }

  .btn-success {
    background: var(--success-color);
    color: white;
  }

  .btn-success:hover:not(:disabled) {
    background: var(--success-hover);
    transform: translateY(-1px);
  }

  .btn-danger {
    background: var(--danger-color);
    color: white;
  }

  .btn-danger:hover:not(:disabled) {
    background: var(--danger-hover);
    transform: translateY(-1px);
  }

  .btn-sm {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
`;

// Result Items Styles
export const resultStyles = css`
  .results-list {
    display: grid;
    gap: 1.5rem;
  }

  .result-item {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
  }

  .result-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
  }

  .result-item img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: var(--radius-md);
    flex-shrink: 0;
  }

  .result-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .result-actions {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

// Shopping List Styles
export const shoppingListStyles = css`
  .shopping-list {
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    position: sticky;
    top: 2rem;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: var(--shadow-sm);
  }

  .ingredient-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
  }

  .ingredient-item:last-child {
    border-bottom: none;
  }

  .ingredient-info {
    flex: 1;
  }

  .ingredient-counter {
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    min-width: 28px;
    text-align: center;
  }

  .shopping-list-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
  }
`;

// Empty State Styles
export const emptyStateStyles = css`
  .empty-state {
    text-align: center;
    padding: 2rem;
    color: var(--text-muted);
  }

  .empty-state::before {
    content: "🍸";
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
  }
`;

// Toast Notification Styles
export const toastStyles = css`
  .toaster {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    pointer-events: none;
    max-width: 400px;
  }

  .toast {
    background: var(--surface-color);
    color: var(--text-primary);
    padding: 1rem 1.25rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    transform: translateX(100%);
    transition: var(--transition);
    pointer-events: auto;
    width: 100%;
    border: 1px solid var(--border-color);
    cursor: pointer;
    word-wrap: break-word;
    min-width: 280px;
  }

  .toast.show {
    opacity: 1;
    transform: translateX(0);
  }

  .toast.success {
    background: var(--success-color);
    color: white;
    border-color: var(--success-color);
  }

  .toast.error {
    background: var(--danger-color);
    color: white;
    border-color: var(--danger-color);
  }

  .toast.info {
    background: var(--info-color);
    color: white;
    border-color: var(--info-color);
  }

  .toast.warning {
    background: var(--warning-color);
    color: white;
    border-color: var(--warning-color);
  }
`;

// Loading Spinner Styles
export const loadingStyles = css`
  .spinner {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 2px solid currentColor;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// Responsive Styles
export const responsiveStyles = css`
  @media (max-width: 768px) {
    .container {
      margin: 1rem;
      padding: 1.5rem;
    }

    .container h1 {
      font-size: 2rem;
    }

    .search-container {
      flex-direction: column;
    }

    .search-container input {
      min-width: 100%;
    }

    .result-item {
      flex-direction: column;
      text-align: center;
    }

    .result-item img {
      width: 100px;
      height: 100px;
      align-self: center;
    }

    .shopping-list {
      position: static;
      max-height: none;
    }

    .toaster {
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
      max-width: none;
    }

    .toast {
      min-width: auto;
    }
  }

  @media (max-width: 480px) {
    .container {
      margin: 0.5rem;
      padding: 1rem;
    }

    .container h1 {
      font-size: 1.75rem;
    }
  }
`;

// Print Styles
export const printStyles = css`
  @media print {
    body * {
      visibility: hidden;
    }

    .print-content,
    .print-content * {
      visibility: visible;
    }

    .print-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }

    .print-content h2 {
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      font-size: 1.5rem;
      border-bottom: 2px solid var(--primary-color);
      padding-bottom: 0.5rem;
    }

    .print-content .ingredient-item {
      border-bottom: 1px solid var(--border-color);
      padding: 0.75rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .print-content .ingredient-counter {
      background: var(--primary-color);
      color: white;
      border-radius: 50%;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
      min-width: 28px;
      text-align: center;
    }

    .print-content .footer {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
      font-size: 0.875rem;
      color: var(--text-muted);
    }
  }
`;

// Combined styles - you can import individual style groups or use this combined version
export const allStyles = css`
  ${containerStyles}
  ${typographyStyles}
  ${formStyles}
  ${buttonStyles}
  ${resultStyles}
  ${shoppingListStyles}
  ${emptyStateStyles}
  ${toastStyles}
  ${loadingStyles}
  ${responsiveStyles}
  ${printStyles}
`;
