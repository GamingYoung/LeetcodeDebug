/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    const tickGroup = []
    const op = new Map()
    for (const ticket of tickets) {
      if (op.has(ticket[0])) {
        tickGroup[op.get(ticket[0])].push(ticket[1])
      } else {
        op.set(ticket[0], tickGroup.length)
        tickGroup.push([ticket[1]])
      }
    }
    for (const tick of tickGroup) {
      tick.sort((a, b) => a.localeCompare(b))
    }
    const res = ['JFK']
    for (let i = 0; i < tickets.length; i++) {
      res.push(tickGroup[op.get(res[i])].pop())
    }
    return res
}

findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])