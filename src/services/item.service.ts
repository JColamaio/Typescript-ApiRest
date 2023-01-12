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

const updateCar = async (id: string) => {
    const responseUpdateItem = await ItemModel.findByIdAndUpdate({ _id: id },
    );
    return responseUpdateItem

};

const deleteCar = async (id:string) => {
    const responseDeleteItem = await ItemModel.findOneAndRemove({ id })
    return responseDeleteItem;
}
export { insertCar, getCars, getOneCar, updateCar, deleteCar }