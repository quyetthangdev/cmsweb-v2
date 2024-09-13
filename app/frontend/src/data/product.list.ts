import { IProductInfo } from '@/types'

const productListData: { items: IProductInfo[] } = {
  items: [
    {
      id: '1',
      createdBy: 'Nguyễn Văn A',
      productCode: 'PRD001',
      productName: 'Máy khoan',
      modelOrSerialNumber: 'MK-001',
      supplier: 'Công ty A',
      unit: 'Cái',
      quantity: '10',
      address: '123 Đường A, Quận 1, TP.HCM',
      note: 'Hàng mới nhập',
      createdAt: new Date('2021-09-01')
    },
    {
      id: '2',
      createdBy: 'Lê Văn B',
      productCode: 'PRD002',
      productName: 'Máy hàn',
      modelOrSerialNumber: 'MH-002',
      supplier: 'Công ty B',
      unit: 'Cái',
      quantity: '5',
      address: '234 Đường B, Quận 2, TP.HCM',
      note: 'Cần kiểm tra trước khi dùng',
      createdAt: new Date('2021-09-02')
    },
    {
      id: '3',
      createdBy: 'Trần Thị C',
      productCode: 'PRD003',
      productName: 'Máy cắt',
      modelOrSerialNumber: 'MC-003',
      supplier: 'Công ty C',
      unit: 'Cái',
      quantity: '15',
      address: '345 Đường C, Quận 3, TP.HCM',
      note: 'Dùng cho công trình A',
      createdAt: new Date('2021-09-03')
    },
    {
      id: '4',
      createdBy: 'Phạm Văn D',
      productCode: 'PRD004',
      productName: 'Thang nhôm',
      modelOrSerialNumber: 'TN-004',
      supplier: 'Công ty D',
      unit: 'Cái',
      quantity: '20',
      address: '456 Đường D, Quận 4, TP.HCM',
      note: 'Sắp hết hàng',
      createdAt: new Date('2021-09-04')
    },
    {
      id: '5',
      createdBy: 'Nguyễn Thị E',
      productCode: 'PRD005',
      productName: 'Búa cao su',
      modelOrSerialNumber: 'BCS-005',
      supplier: 'Công ty E',
      unit: 'Cái',
      quantity: '50',
      address: '567 Đường E, Quận 5, TP.HCM',
      note: 'Hàng có sẵn',
      createdAt: new Date('2021-09-05')
    },
    {
      id: '6',
      createdBy: 'Đinh Văn F',
      productCode: 'PRD006',
      productName: 'Kìm cắt',
      modelOrSerialNumber: 'KC-006',
      supplier: 'Công ty F',
      unit: 'Cái',
      quantity: '8',
      address: '678 Đường F, Quận 6, TP.HCM',
      note: 'Đang sử dụng tại công trình B',
      createdAt: new Date('2021-09-06')
    },
    {
      id: '7',
      createdBy: 'Lê Thành G',
      productCode: 'PRD007',
      productName: 'Máy bào',
      modelOrSerialNumber: 'MB-007',
      supplier: 'Công ty G',
      unit: 'Cái',
      quantity: '3',
      address: '789 Đường G, Quận 7, TP.HCM',
      note: 'Sắp đến hạn bảo trì',
      createdAt: new Date('2021-09-07')
    },
    {
      id: '8',
      createdBy: 'Nguyễn Văn H',
      productCode: 'PRD008',
      productName: 'Cờ lê',
      modelOrSerialNumber: 'CL-008',
      supplier: 'Công ty H',
      unit: 'Bộ',
      quantity: '25',
      address: '890 Đường H, Quận 8, TP.HCM',
      note: 'Kiểm tra định kỳ',
      createdAt: new Date('2021-09-08')
    },
    {
      id: '9',
      createdBy: 'Trần Thị I',
      productCode: 'PRD009',
      productName: 'Máy khoan cầm tay',
      modelOrSerialNumber: 'MKCT-009',
      supplier: 'Công ty I',
      unit: 'Cái',
      quantity: '30',
      address: '123 Đường I, Quận 9, TP.HCM',
      note: 'Dự phòng',
      createdAt: new Date('2021-09-09')
    },
    {
      id: '10',
      createdBy: 'Ngô Văn J',
      productCode: 'PRD010',
      productName: 'Mũ bảo hộ',
      modelOrSerialNumber: 'MBH-010',
      supplier: 'Công ty J',
      unit: 'Cái',
      quantity: '100',
      address: '234 Đường J, Quận 10, TP.HCM',
      note: 'Hàng tồn kho',
      createdAt: new Date('2021-09-10')
    },
    {
      id: '11',
      createdBy: 'Nguyễn Văn K',
      productCode: 'PRD011',
      productName: 'Máy khoan cầm tay',
      modelOrSerialNumber: 'MKCT-011',
      supplier: 'Công ty K',
      unit: 'Cái',
      quantity: '30',
      address: '345 Đường K, Quận 11, TP.HCM',
      note: 'Hàng mới nhập',
      createdAt: new Date('2021-09-11')
    },
    {
      id: '12',
      createdBy: 'Nguyễn Văn L',
      productCode: 'PRD012',
      productName: 'Máy khoan cầm tay',
      modelOrSerialNumber: 'MKCT-012',
      supplier: 'Công ty L',
      unit: 'Cái',
      quantity: '30',
      address: '456 Đường L, Quận 12, TP.HCM'
    },
    {
      id: '13',
      createdBy: 'Nguyễn Văn M',
      productCode: 'PRD013',
      productName: 'Máy khoan cầm tay',
      modelOrSerialNumber: 'MKCT-013',
      supplier: 'Công ty M',
      unit: 'Cái',
      quantity: '30',
      address: '567 Đường M, Quận 13, TP.HCM'
    },
    {
      id: '14',
      createdBy: 'Nguyễn Văn N',
      productCode: 'PRD014',
      productName: 'Máy khoan cầm tay',
      modelOrSerialNumber: 'MKCT-014',
      supplier: 'Công ty N',
      unit: 'Cái',
      quantity: '30',
      address: '678 Đường N, Quận 14, TP.HCM'
    },
    {
      id: '15',
      createdBy: 'Nguyễn Văn O',
      productCode: 'PRD015',
      productName: 'Máy khoan cầm tay',
      modelOrSerialNumber: 'MKCT-015',
      supplier: 'Công ty O',
      unit: 'Cái',
      quantity: '30',
      address: '789 Đường O, Quận 15, TP.HCM'
    }
  ]
}

export default productListData
