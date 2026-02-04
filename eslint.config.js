import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  typescript: true,
})
  .overrideRules({
    'style/operator-linebreak': ['error', 'before', { overrides: { '=': 'after' } }],
    'style/brace-style': 'error',
    'style/arrow-parens': ['error', 'always'],
    'style/arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
    'style/quote-props': ['error', 'as-needed', { keywords: false }],
    'antfu/if-newline': 0,
  })
