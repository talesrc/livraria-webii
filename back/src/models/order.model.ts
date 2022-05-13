import { BelongsToMany, Column, CreatedAt, DataType, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { User } from './user.model'
import { OrderProduct } from './orderProduct.model'
import { Product } from './product.model'
import { Adress } from './adress.model'

@Table({timestamps: true})
export class Order extends Model<Order> {

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    price: number

    @ForeignKey(() => User)
    @Column({
            type: DataType.INTEGER,
            allowNull: false
        })
    userId: number

    //Relations
    @BelongsToMany(() => Product, {through: {model: () => OrderProduct, unique: false}})
    products: Product[]
}
