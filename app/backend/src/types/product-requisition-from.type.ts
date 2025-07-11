import {
  TCreateRequestProductRequestDto,
  TCreateApprovalLogRequestDto,
  TQueryRequest,
} from "@types";

export type TCreateProductRequisitionFormRequestDto = {
  code?: string;
  PO?: string;
  // project?: string;
  projectName?: string;
  type?: string; //normal, urgent
  deadlineApproval?: string;
  description?: string;
  requestProducts: TCreateRequestProductRequestDto[];
  creatorId?: string;
  departmentSlug?: string;
};

export type TApprovalProductRequisitionFormRequestDto = {
  formSlug?: string;
  approvalLog?: TCreateApprovalLogRequestDto;
};

export type TResubmitProductRequisitionFormRequestDto = {
  slug?: string;
  description?: string;
};

export type TUpdateGeneralInformationProductRequisitionFormRequestDto = {
  // project?: string;
  projectName?: string;
  PO?: string;
  type?: string;
  deadlineApproval?: string;
  description?: string;
};

export type TGetAllProductRequisitionFormsCompletedApproval = TQueryRequest & {
  type?: string; //normal, urgent
};

export type TGetAllProductRequisitionForms = TQueryRequest & {
  type?: string; //normal, urgent
};
