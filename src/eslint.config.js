import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  typescript: true,
})
  .overrideRules({
    'style/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
    'style/brace-style': 'error',
    'style/arrow-parens': ['error', 'always'],
    'style/quote-props': ['error', 'as-needed', { keywords: true }],
    'antfu/if-newline': 0,
  })
