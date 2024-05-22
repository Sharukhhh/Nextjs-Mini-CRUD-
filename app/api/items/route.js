import mongoConnect from "@/libs/mongodb";
import ItemModel from "@/models/itemModel";
import { NextResponse , NextRequest} from "next/server";


export async function POST(request ) {
    try {

        const {title , description} = await request.json();
        await mongoConnect();
        await ItemModel.create({title , description});

        return NextResponse.json({message : 'Item Saved'} , {status : 201});

    } catch (error) {
        console.log(error);
    }
}

export async function GET() {
    try {

        await mongoConnect();
        const items = await ItemModel.find().sort({_id : -1});

        return NextResponse.json({items});

    } catch (error) {
        console.log(error);
    }
}

export async function DELETE(req) {
    try {
        const id = req.nextUrl.searchParams.get('id');

        await mongoConnect();
        await ItemModel.findByIdAndDelete(id);

        return NextResponse.json({messsage :'Item Deleted'} , {status : 200});

    } catch (error) {
        console.log(error);
    }
}