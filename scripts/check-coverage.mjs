import { existsSync, readFileSync } from 'node:fs'
import process from 'node:process'

const coveragePath = 'coverage/lcov.info'
const minLines = Number(process.env.MIN_COVERAGE_LINES ?? 85)
const minFuncs = Number(process.env.MIN_COVERAGE_FUNCS ?? 85)

function asPercent(covered, total) {
  if (!total) return 0
  return (covered / total) * 100
}

function readCoverage(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`Coverage file not found: ${filePath}`)
  }

  const source = readFileSync(filePath, 'utf8').split('\n')

  let linesTotal = 0
  let linesCovered = 0
  let funcsTotal = 0
  let funcsCovered = 0

  for (const line of source) {
    if (line.startsWith('LF:')) {
      linesTotal += Number(line.slice(3) || 0)
    }

    if (line.startsWith('LH:')) {
      linesCovered += Number(line.slice(3) || 0)
    }

    if (line.startsWith('FNF:')) {
      funcsTotal += Number(line.slice(4) || 0)
    }

    if (line.startsWith('FNH:')) {
      funcsCovered += Number(line.slice(4) || 0)
    }
  }

  return {
    linesTotal,
    linesCovered,
    funcsTotal,
    funcsCovered,
  }
}

const coverage = readCoverage(coveragePath)
const linesPercent = asPercent(coverage.linesCovered, coverage.linesTotal)
const funcsPercent = asPercent(coverage.funcsCovered, coverage.funcsTotal)

console.log(`Coverage lines: ${linesPercent.toFixed(2)}% (min ${minLines}%)`)
console.log(`Coverage funcs: ${funcsPercent.toFixed(2)}% (min ${minFuncs}%)`)

if (linesPercent < minLines || funcsPercent < minFuncs) {
  console.error('Coverage check failed')
  process.exit(1)
}

console.log('Coverage check passed')
