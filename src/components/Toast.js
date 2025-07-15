import { useState } from "@pionjs/pion";
import { html } from "lit-html";

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "info", duration = 3000) => {
    const id = Date.now() + Math.random();
    const toast = { id, message, type, show: false };

    setToasts((prevToasts) => [...prevToasts, toast]);

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((t) => (t.id === id ? { ...t, show: true } : t))
      );
    }, 100);

    setTimeout(() => {
      hideToast(id);
    }, duration);
  };

  const hideToast = (id) => {
    setToasts((prevToasts) =>
      prevToasts.map((t) => (t.id === id ? { ...t, show: false } : t))
    );

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }, 300);
  };

  const renderToaster = () => {
    if (toasts.length === 0) return "";

    return html`
      <div class="toaster">
        ${toasts.map(
          (toast) => html`
            <div
              class="toast ${toast.type} ${toast.show ? "show" : ""}"
              @click=${() => hideToast(toast.id)}
            >
              ${toast.message}
            </div>
          `
        )}
      </div>
    `;
  };

  return { showToast, hideToast, renderToaster };
}
