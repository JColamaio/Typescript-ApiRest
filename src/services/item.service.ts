import { Car } from '../interfaces/car.interface'
import ItemModel from "../models/item.model";

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

const getCars = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem
}

const getOneCar = async (id: string) => {
    const responseOneItem = await ItemModel.findOne({_id: id})
    return responseOneItem
}

const updateCar = async (id: string, data: Car) => {
    const responseUpdateItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });

console.log(data,'este')
return responseUpdateItem
};

const deleteCar = async () => {

}
export { insertCar, getCars, getOneCar, updateCar, deleteCar }