import{_ as n,f as t,e as s,N as a}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"Tree","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/tree.md","lastUpdated":1694442156385}',p={},e=a(`__VP_STATIC_START__<h1 id="tree"><a class="header-anchor" href="#tree" aria-hidden="true">#</a> Tree</h1><p>\u5BF9 <code>antv</code> \u7684 tree \u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicTree</span> <span class="token attr-name">:treeData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>treeData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicTree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Tree/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> treeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./data&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> TreeItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Tree/index&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">treeData</span><span class="token operator">:</span> TreeItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;parent 1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;0-0&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;home|svg&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;0-0-0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;0-0-1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;0-0-0-0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;0-0-0-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;parent 2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;1-1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;home|svg&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;1-1-0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;1-1-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;parent 3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;2-2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;home|svg&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;2-2-0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;2-2-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicTree<span class="token punctuation">,</span> CollapseContainer <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> treeData <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u9192</p><p>\u9664\u4EE5\u4E0B\u53C2\u6570\u5916\uFF0C\u5B98\u65B9\u6587\u6863\u5185\u7684 props \u4E5F\u90FD\u652F\u6301\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 <a href="https://2x.antdv.com/components/tree-cn/#Tree-props" target="_blank" rel="noopener noreferrer">antv tree</a></p></div><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>treeData</td><td><code>TreeItem[]</code></td><td>-</td><td>-</td><td>\u6811\u7EC4\u4EF6\u6570\u636E</td><td></td></tr><tr><td>rightMenuList</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>\u53F3\u952E\u83DC\u5355\u5217\u8868</td><td></td></tr><tr><td>checkedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>\u52FE\u9009\u7684\u8282\u70B9</td><td></td></tr><tr><td>selectedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>\u9009\u4E2D\u7684\u8282\u70B9</td><td></td></tr><tr><td>expandedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>\u5C55\u5F00\u7684\u8282\u70B9</td><td></td></tr><tr><td>actionList</td><td><code>ActionItem[]</code></td><td>-</td><td>-</td><td>\u9F20\u6807\u79FB\u52A8\u4E0A\u53BB\u53F3\u8FB9\u64CD\u4F5C\u6309\u94AE\u5217\u8868</td><td></td></tr><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>\u5B9A\u5236\u6807\u9898\u5B57\u7B26\u4E32</td><td></td></tr><tr><td>toolbar</td><td><code>boolean</code></td><td>-</td><td>-</td><td>\u662F\u5426\u663E\u793A\u5DE5\u5177\u680F</td><td></td></tr><tr><td>search</td><td><code>boolean</code></td><td>-</td><td>-</td><td>\u663E\u793A\u641C\u7D22\u6846</td><td></td></tr><tr><td>clickRowToExpand</td><td><code>boolean</code></td><td>-</td><td>-</td><td>\u662F\u5426\u5728\u70B9\u51FB\u884C\u65F6\u81EA\u52A8\u5C55\u5F00</td><td></td></tr><tr><td>beforeRightClick</td><td><code>(node, event)=&gt;ContextMenuItem[]</code></td><td>-</td><td>-</td><td>\u53F3\u952E\u70B9\u51FB\u56DE\u8C03\uFF0C\u53EF\u8FD4\u56DE\u53F3\u952E\u83DC\u5355\u5217\u8868\u6570\u636E\u6765\u751F\u6210\u53F3\u952E\u83DC\u5355</td><td></td></tr><tr><td>rightMenuList</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>\u53F3\u952E\u83DC\u5355\u5217\u8868\u6570\u636E</td><td></td></tr><tr><td>defaultExpandLevel</td><td><code>string \uFF5C number</code></td><td>-</td><td>-</td><td>\u521D\u6B21\u6E32\u67D3\u540E\u9ED8\u8BA4\u5C55\u5F00\u7684\u5C42\u7EA7</td><td>2.4.1</td></tr><tr><td>defaultExpandAll</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>\u521D\u6B21\u6E32\u67D3\u540E\u9ED8\u8BA4\u5168\u90E8</td><td>2.4.1</td></tr><tr><td>searchValue(v-model)</td><td><code>string</code></td><td>-</td><td>-</td><td>\u5F53\u524D\u641C\u7D22\u8BCD</td><td>2.7.1</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p><code>defaultExpandLevel</code>\u3001<code>defaultExpandAll</code> \u4EC5\u5728<strong>\u521D\u6B21\u6E32\u67D3</strong>\u65F6\u751F\u6548\u3002\u5982\u679C<code>basicTree</code>\u662F\u5728\u521B\u5EFA\u5B8C\u6BD5\u4E4B\u540E\u624D\u8BBE\u7F6E\u7684<code>treeData</code>(\u5982\u5F02\u6B65\u6570\u636E)\uFF0C\u9700\u8981\u5728\u66F4\u65B0\u540E\u81EA\u5DF1\u8C03\u7528<code>basicTree</code>\u63D0\u4F9B\u7684<code>expandAll</code>\u3001<code>filterByLevel</code>\u6765\u6267\u884C\u5C55\u5F00</p></div><p><strong>ActionItem</strong></p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// \u6E32\u67D3\u7684\u56FE\u6807</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>record<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A</span>
  show<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>record<span class="token operator">:</span> Recordable<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>ContextMenuItem</strong></p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// \u6587\u672C</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u56FE\u6807</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u7981\u7528</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4E8B\u4EF6</span>
  handler<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token comment">// \u662F\u5426\u663E\u793A\u5206\u9694\u7EBF</span>
  divider<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5B50\u7EA7\u83DC\u5355\u6570\u636E</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ContextMenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u9192</p><p>\u5B98\u65B9\u6587\u6863\u5185\u7684 slot \u90FD\u652F\u6301\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 <a href="https://2x.antdv.com/components/tree-cn/#Tree-props" target="_blank" rel="noopener noreferrer">antv tree</a></p></div><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>checkAll</td><td><code>(checkAll: boolean) =&gt; void</code></td><td>\u9009\u62E9\u6240\u6709</td></tr><tr><td>expandAll</td><td><code>(expandAll: boolean) =&gt; void</code></td><td>\u5C55\u5F00\u6240\u6709</td></tr><tr><td>setExpandedKeys</td><td><code>(keys: Keys) =&gt; void</code></td><td>\u8BBE\u7F6E\u5C55\u5F00\u8282\u70B9</td></tr><tr><td>getExpandedKeys</td><td><code>() =&gt; Keys</code></td><td>\u83B7\u53D6\u5C55\u5F00\u8282\u70B9</td></tr><tr><td>setSelectedKeys</td><td><code>(keys: Keys) =&gt; void</code></td><td>\u8BBE\u7F6E\u9009\u4E2D\u8282\u70B9</td></tr><tr><td>getSelectedKeys</td><td><code>() =&gt; Keys</code></td><td>\u83B7\u53D6\u9009\u4E2D\u8282\u70B9</td></tr><tr><td>setCheckedKeys</td><td><code>(keys: CheckKeys) =&gt; void</code></td><td>\u8BBE\u7F6E\u52FE\u9009\u8282\u70B9</td></tr><tr><td>getCheckedKeys</td><td><code>() =&gt; CheckKeys</code></td><td>\u83B7\u53D6\u52FE\u9009\u8282\u70B9</td></tr><tr><td>filterByLevel</td><td><code>(level: number) =&gt; void</code></td><td>\u663E\u793A\u6307\u5B9A\u7B49\u7EA7</td></tr><tr><td>insertNodeByKey</td><td><code>(opt: InsertNodeParams) =&gt; void</code></td><td>\u63D2\u5165\u5B50\u8282\u70B9\u5230\u6307\u5B9A\u8282\u70B9\u5185</td></tr><tr><td>deleteNodeByKey</td><td><code>(key: string) =&gt; void</code></td><td>\u6839\u636E key \u5220\u9664\u8282\u70B9</td></tr><tr><td>updateNodeByKey</td><td><code>(key: string, node: Omit&lt;TreeItem, &#39;key&#39;&gt;) =&gt; void</code></td><td>\u6839\u636E key \u66F4\u65B0\u8282\u70B9</td></tr><tr><td>setSearchValue</td><td><code>(value: string) =&gt; void</code></td><td>\u8BBE\u7F6E\u5F53\u524D\u641C\u7D22\u8BCD\uFF08v2.7.1\uFF09</td></tr><tr><td>getSearchValue</td><td><code>() =&gt; string</code></td><td>\u83B7\u53D6\u5F53\u524D\u641C\u7D22\u8BCD(v2.7.1)</td></tr></tbody></table>__VP_STATIC_END__`,16),o=[e];function c(r,l,d,k,i,u){return s(),t("div",null,o)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
