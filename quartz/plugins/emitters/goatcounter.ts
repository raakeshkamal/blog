import { QuartzEmitterPlugin } from "../types"
import { BuildCtx } from "../../util/ctx"
import { h } from "preact"

interface GoatCounterOptions {
  code: string
}

export const GoatCounter: QuartzEmitterPlugin<GoatCounterOptions> = (opts?: GoatCounterOptions) => {
  const code = opts?.code ?? "YOUR_CODE"

  return {
    name: "GoatCounter",
    async emit() {
      return []
    },
    externalResources(_ctx: BuildCtx) {
      return {
        additionalHead: [
          h("script", {
            "data-goatcounter": `https://${code}.goatcounter.com/count`,
            async: true,
            src: "//gc.zgo.at/count.js",
          }) as any,
        ],
      }
    },
  }
}
