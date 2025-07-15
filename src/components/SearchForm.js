import { html } from "lit-html";

export function SearchForm({
  searchQuery,
  setSearchQuery,
  isSearching,
  onSearch,
  onClear,
  inputRef,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return html`
    <input
      id="search-input"
      ${inputRef}
      type="text"
      placeholder="Search for cocktails..."
      .value=${searchQuery}
      @input=${(e) => setSearchQuery(e.target.value)}
      @keypress=${handleKeyPress}
    />
    <button
      class="btn btn-primary"
      type="button"
      @click=${onSearch}
      ?disabled=${isSearching}
    >
      ${isSearching
        ? html`<span class="spinner"></span> Searching...`
        : "Search"}
    </button>
    ${searchQuery
      ? html`<button class="btn btn-secondary" type="button" @click=${onClear}>
          Clear
        </button>`
      : ""}
  `;
}
