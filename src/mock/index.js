
import Mock from "mockjs"
const chartData = () => {
    // mock随机数据
    const Random = Mock.Random;
    let data = {};
    data.left = []
    data.right = []

    for (let i = 0; i < 100; i++) {
        let newData = {
            title: Random.csentence(10, 25),
            author: Random.cname(),
            number: Random.natural(0, 5000),
            image: Random.image()
        }
        data.left.push(newData)
    }

    for (let i = 0; i < 100; i++) {
        let Data = {
            title: Random.csentence(10, 25),
            author: Random.cname(),
            number: Random.natural(0, 5000),
            image: Random.image()
        }

        data.right.push(Data)
    }
    return data
}

Mock.mock("/getData", 'get', chartData)

