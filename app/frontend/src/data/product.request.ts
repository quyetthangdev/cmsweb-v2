import { IProductApprovalInfo } from "@/types";

const productData: {items:IProductApprovalInfo[]} = {
    "items": [
      {
        "id": "728ed52f",
        "createdBy": "Lê Thành Nghĩa",
        "createdAt": "2021-09-01T00:00:00Z",
        "commanderApprovalStatus": "approved",
        "commanderApprovalContent": "Duyệt yêu cầu vật tư",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Duyệt yêu cầu vật tư",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Duyệt yêu cầu vật tư",
        "notes": "Yêu cầu vật tư gấp"
      },
      {
        "id": "829dc62e",
        "createdBy": "Nguyễn Văn A",
        "createdAt": "2021-09-10T00:00:00Z",
        "commanderApprovalStatus": "pending",
        "commanderApprovalContent": "Chưa duyệt yêu cầu",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Duyệt yêu cầu nhanh",
        "directorApprovalStatus": "rejected",
        "directorApprovalContent": "Xem xét chi tiết",
        "notes": "Cần thêm thông tin"
      },
      {
        "id": "930fe73a",
        "createdBy": "Trần Văn B",
        "createdAt": "2021-08-15T00:00:00Z",
        "commanderApprovalStatus": "approved",
        "commanderApprovalContent": "Đồng ý với yêu cầu",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Duyệt yêu cầu vật tư",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Xác nhận",
        "notes": "Không có vấn đề gì"
      },
      {
        "id": "a41hf74b",
        "createdBy": "Lê Văn C",
        "createdAt": "2021-09-25T00:00:00Z",
        "commanderApprovalStatus": "pending",
        "commanderApprovalContent": "Chưa đồng ý",
        "projectManagerApprovalStatus": "pending",
        "projectManagerApprovalContent": "Chờ thông tin thêm",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Phê duyệt nhanh",
        "notes": "Yêu cầu thêm lý do"
      },
      {
        "id": "b52jf85c",
        "createdBy": "Nguyễn Thị D",
        "createdAt": "2021-10-02T00:00:00Z",
        "commanderApprovalStatus": "approved",
        "commanderApprovalContent": "Duyệt",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Xác nhận yêu cầu",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Phê duyệt",
        "notes": "Yêu cầu đã được xử lý"
      },
      {
        "id": "c63kg96d",
        "createdBy": "Phạm Văn E",
        "createdAt": "2021-07-20T00:00:00Z",
        "commanderApprovalStatus": "pending",
        "commanderApprovalContent": "Không đủ thông tin",
        "projectManagerApprovalStatus": "pending",
        "projectManagerApprovalContent": "Thiếu thông tin",
        "directorApprovalStatus": "pending",
        "directorApprovalContent": "Cần thêm chi tiết",
        "notes": "Yêu cầu bổ sung thông tin"
      },
      {
        "id": "d74lf97e",
        "createdBy": "Lê Văn F",
        "createdAt": "2021-06-15T00:00:00Z",
        "commanderApprovalStatus": "approved",
        "commanderApprovalContent": "Duyệt ngay",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Không có vấn đề",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Xác nhận yêu cầu",
        "notes": "Không cần bổ sung"
      },
      {
        "id": "e85mg08f",
        "createdBy": "Nguyễn Thị G",
        "createdAt": "2021-05-25T00:00:00Z",
        "commanderApprovalStatus": "pending",
        "commanderApprovalContent": "Cần thêm thông tin",
        "projectManagerApprovalStatus": "pending",
        "projectManagerApprovalContent": "Đang kiểm tra",
        "directorApprovalStatus": "pending",
        "directorApprovalContent": "Cần thông tin thêm",
        "notes": "Cần cung cấp thêm tài liệu"
      },
      {
        "id": "f96nh09g",
        "createdBy": "Trần Văn H",
        "createdAt": "2021-08-01T00:00:00Z",
        "commanderApprovalStatus": "approved",
        "commanderApprovalContent": "Duyệt gấp",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Xác nhận nhanh",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Xác nhận",
        "notes": "Yêu cầu xử lý khẩn"
      },
      {
        "id": "g07oi10h",
        "createdBy": "Lê Thành I",
        "createdAt": "2021-07-10T00:00:00Z",
        "commanderApprovalStatus": "pending",
        "commanderApprovalContent": "Chưa có đầy đủ thông tin",
        "projectManagerApprovalStatus": "pending",
        "projectManagerApprovalContent": "Thiếu thông tin",
        "directorApprovalStatus": "pending",
        "directorApprovalContent": "Chờ thêm dữ liệu",
        "notes": "Bổ sung chi tiết"
      },
      {
        "id": "h18pj11i",
        "createdBy": "Nguyễn Văn J",
        "createdAt": "2021-09-15T00:00:00Z",
        "commanderApprovalStatus": "approved",
        "commanderApprovalContent": "Duyệt nhanh",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Không có vấn đề",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Phê duyệt ngay",
        "notes": "Xử lý gấp"
      },
      {
        "id": "i29qk12j",
        "createdBy": "Trần Thị K",
        "createdAt": "2021-10-20T00:00:00Z",
        "commanderApprovalStatus": "pending",
        "commanderApprovalContent": "Đang chờ phê duyệt",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Xác nhận",
        "directorApprovalStatus": "pending",
        "directorApprovalContent": "Chờ thêm chi tiết",
        "notes": "Đang chờ xử lý"
      },
      {
        "id": "j30rl13k",
        "createdBy": "Lê Văn L",
        "createdAt": "2021-06-30T00:00:00Z",
        "commanderApprovalStatus": "approved",
        "commanderApprovalContent": "Phê duyệt",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Không có vấn đề",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Phê duyệt ngay",
        "notes": "Xử lý nhanh"
      },
      {
        "id": "k41sm14l",
        "createdBy": "Nguyễn Văn M",
        "createdAt": "2021-05-15T00:00:00Z",
        "commanderApprovalStatus": "pending",
        "commanderApprovalContent": "Cần thêm thông tin",
        "projectManagerApprovalStatus": "pending",
        "projectManagerApprovalContent": "Đang xử lý",
        "directorApprovalStatus": "pending",
        "directorApprovalContent": "Chờ bổ sung",
        "notes": "Cần xử lý nhanh"
      },
      {
        "id": "l52tn15m",
        "createdBy": "Trần Thị N",
        "createdAt": "2021-07-01T00:00:00Z",
        "commanderApprovalStatus": "approved",
        "commanderApprovalContent": "Phê duyệt",
        "projectManagerApprovalStatus": "approved",
        "projectManagerApprovalContent": "Xác nhận",
        "directorApprovalStatus": "approved",
        "directorApprovalContent": "Phê duyệt",
        "notes": "Yêu cầu đã được xử lý"
      }
    ]
}
  
export default productData;
  