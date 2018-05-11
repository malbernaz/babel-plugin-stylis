import serialize from "babel-literal-to-ast";
import Stylis from "stylis";

const visitor = {
  TaggedTemplateExpression(path, { opts = {} }) {
    if (path.node.tag.name === "css") {
      const stylis = new Stylis(Object.assign({ compress: true, semicolon: true }, opts));

      try {
        if (path.get("quasi").get("expressions").length)
          throw path.buildCodeFrameError("css template literal does not support interpolation!");

        const source = path
          .get("quasi")
          .node.quasis.reduce((head, quasi) => head + quasi.value.raw, "");

        const compiled = stylis("", source);

        path.replaceWith(serialize(compiled));
      } catch (err) {
        throw err;
      }
    }
  }
};

export default { visitor };
