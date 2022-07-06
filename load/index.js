import "array-each-slice";
import { readFileSync, writeFileSync } from "fs";

const loadJson = ({ inputFilePath }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await readFileSync(inputFilePath, { encoding: "utf-8" });
      resolve(JSON.parse(data));
    } catch (error) {
      reject(error);
    }
  });
};

const saveJson = ({ outputFilePath, data }) => {
  return new Promise(async (resolve, reject) => {
    try {
      await writeFileSync(outputFilePath, data, { encoding: "utf-8" });
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

(async () => {
  const size = 50000;
  const fullFileName = "flights-mini.json";
  const [fileName, extension] = [...fullFileName.split(".")];
  const data = await loadJson({ inputFilePath: fullFileName });
  const groupedItemList = data.eachSlice(size);
  for (let index = 0; index < groupedItemList.length; index++) {
    const itemInfoList = groupedItemList[index];
    const outputFilePath = `${fileName}-${index * size + 1}-${
      index * size + size < data.length ? index * size + size : data.length
    }.${extension}`;
    await saveJson({ outputFilePath, data: JSON.stringify(itemInfoList) });
  }
})();
