import mongoose from 'mongoose';
const productSchmea = new mongoose.Schema(
  {
    decsciption: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    productImage: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0,
    },
    // HR EK PRODUCT CETEGI=ORY KO BLONG KRE
    cetegory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cetegory',
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export const Product = mongoose.modelO('Product', productSchmea);


// FEILD EK IMAGE BH HOTI TO KiA MONGO DB ME DIRECT RAKH SKTE H TO ANSWER HA RKH SKTE H MGR YE RKHA NH JATA KIO K KIO K WO DB KO BH OT HEAVY KR DETA H
// TO KAHA RKHE IS KO
// 1) YE AP K KHUDI SERVER PR EK ALG FOLDER BNA KR RKHA JATA H OR OS FOLDER KA PUBLIC UUL H WO DIYA JATA H
// 2) YA PHR HM THIRD PARTY SERVICES USE KRTE H JESE (WAS) ME WO IMAGE UPLOAD KR DI  PHR AP KO EK RESPOMSE DE TE H TO WO EK URL DETE H
// 3) YE EK STORE H CLOUDNARI US ME AP IMAGE PDF WAGERA UPLOAD KR TE HO WO PHR AP KO URL DETE H
