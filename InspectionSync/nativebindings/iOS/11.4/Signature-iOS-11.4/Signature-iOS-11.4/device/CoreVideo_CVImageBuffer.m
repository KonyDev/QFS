#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CVImageBufferGetDisplaySize"] = ^CGSize(id arg0) {
		return CVImageBufferGetDisplaySize(arg0);
	};
	context[@"CVYCbCrMatrixGetStringForIntegerCodePoint"] = ^id(int arg0) {
		return CVYCbCrMatrixGetStringForIntegerCodePoint(arg0);
	};
	context[@"CVImageBufferGetCleanRect"] = ^CGRect(id arg0) {
		return CVImageBufferGetCleanRect(arg0);
	};
	context[@"CVColorPrimariesGetIntegerCodePointForString"] = ^int(id arg0) {
		return CVColorPrimariesGetIntegerCodePointForString(arg0);
	};
	context[@"CVColorPrimariesGetStringForIntegerCodePoint"] = ^id(int arg0) {
		return CVColorPrimariesGetStringForIntegerCodePoint(arg0);
	};
	context[@"CVTransferFunctionGetStringForIntegerCodePoint"] = ^id(int arg0) {
		return CVTransferFunctionGetStringForIntegerCodePoint(arg0);
	};
	context[@"CVTransferFunctionGetIntegerCodePointForString"] = ^int(id arg0) {
		return CVTransferFunctionGetIntegerCodePointForString(arg0);
	};
	context[@"CVImageBufferIsFlipped"] = ^Boolean(id arg0) {
		return CVImageBufferIsFlipped(arg0);
	};
	context[@"CVImageBufferCreateColorSpaceFromAttachments"] = ^id(id arg0) {
		return CVImageBufferCreateColorSpaceFromAttachments(arg0);
	};
	context[@"CVYCbCrMatrixGetIntegerCodePointForString"] = ^int(id arg0) {
		return CVYCbCrMatrixGetIntegerCodePointForString(arg0);
	};
	context[@"CVImageBufferGetEncodedSize"] = ^CGSize(id arg0) {
		return CVImageBufferGetEncodedSize(arg0);
	};
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCVImageBufferYCbCrMatrix_DCI_P3;
	if (p != NULL) context[@"kCVImageBufferYCbCrMatrix_DCI_P3"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferYCbCrMatrix_DCI_P3 inContext: context];
	p = (void*) &kCVImageBufferCleanApertureWidthKey;
	if (p != NULL) context[@"kCVImageBufferCleanApertureWidthKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferCleanApertureWidthKey inContext: context];
	p = (void*) &kCVImageBufferYCbCrMatrix_SMPTE_240M_1995;
	if (p != NULL) context[@"kCVImageBufferYCbCrMatrix_SMPTE_240M_1995"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferYCbCrMatrix_SMPTE_240M_1995 inContext: context];
	p = (void*) &kCVImageBufferDisplayWidthKey;
	if (p != NULL) context[@"kCVImageBufferDisplayWidthKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferDisplayWidthKey inContext: context];
	p = (void*) &kCVImageBufferColorPrimaries_SMPTE_C;
	if (p != NULL) context[@"kCVImageBufferColorPrimaries_SMPTE_C"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferColorPrimaries_SMPTE_C inContext: context];
	p = (void*) &kCVImageBufferTransferFunctionKey;
	if (p != NULL) context[@"kCVImageBufferTransferFunctionKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunctionKey inContext: context];
	p = (void*) &kCVImageBufferCGColorSpaceKey;
	if (p != NULL) context[@"kCVImageBufferCGColorSpaceKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferCGColorSpaceKey inContext: context];
	p = (void*) &kCVImageBufferTransferFunction_ITU_R_2020;
	if (p != NULL) context[@"kCVImageBufferTransferFunction_ITU_R_2020"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunction_ITU_R_2020 inContext: context];
	p = (void*) &kCVImageBufferFieldDetailSpatialFirstLineEarly;
	if (p != NULL) context[@"kCVImageBufferFieldDetailSpatialFirstLineEarly"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferFieldDetailSpatialFirstLineEarly inContext: context];
	p = (void*) &kCVImageBufferChromaLocation_Bottom;
	if (p != NULL) context[@"kCVImageBufferChromaLocation_Bottom"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocation_Bottom inContext: context];
	p = (void*) &kCVImageBufferFieldDetailSpatialFirstLineLate;
	if (p != NULL) context[@"kCVImageBufferFieldDetailSpatialFirstLineLate"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferFieldDetailSpatialFirstLineLate inContext: context];
	p = (void*) &kCVImageBufferPixelAspectRatioKey;
	if (p != NULL) context[@"kCVImageBufferPixelAspectRatioKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferPixelAspectRatioKey inContext: context];
	p = (void*) &kCVImageBufferColorPrimaries_P3_D65;
	if (p != NULL) context[@"kCVImageBufferColorPrimaries_P3_D65"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferColorPrimaries_P3_D65 inContext: context];
	p = (void*) &kCVImageBufferPixelAspectRatioVerticalSpacingKey;
	if (p != NULL) context[@"kCVImageBufferPixelAspectRatioVerticalSpacingKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferPixelAspectRatioVerticalSpacingKey inContext: context];
	p = (void*) &kCVImageBufferTransferFunction_UseGamma;
	if (p != NULL) context[@"kCVImageBufferTransferFunction_UseGamma"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunction_UseGamma inContext: context];
	p = (void*) &kCVImageBufferColorPrimariesKey;
	if (p != NULL) context[@"kCVImageBufferColorPrimariesKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferColorPrimariesKey inContext: context];
	p = (void*) &kCVImageBufferYCbCrMatrixKey;
	if (p != NULL) context[@"kCVImageBufferYCbCrMatrixKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferYCbCrMatrixKey inContext: context];
	p = (void*) &kCVImageBufferTransferFunction_SMPTE_240M_1995;
	if (p != NULL) context[@"kCVImageBufferTransferFunction_SMPTE_240M_1995"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunction_SMPTE_240M_1995 inContext: context];
	p = (void*) &kCVImageBufferYCbCrMatrix_P3_D65;
	if (p != NULL) context[@"kCVImageBufferYCbCrMatrix_P3_D65"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferYCbCrMatrix_P3_D65 inContext: context];
	p = (void*) &kCVImageBufferChromaLocation_Center;
	if (p != NULL) context[@"kCVImageBufferChromaLocation_Center"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocation_Center inContext: context];
	p = (void*) &kCVImageBufferChromaLocation_DV420;
	if (p != NULL) context[@"kCVImageBufferChromaLocation_DV420"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocation_DV420 inContext: context];
	p = (void*) &kCVImageBufferChromaLocationTopFieldKey;
	if (p != NULL) context[@"kCVImageBufferChromaLocationTopFieldKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocationTopFieldKey inContext: context];
	p = (void*) &kCVImageBufferDisplayHeightKey;
	if (p != NULL) context[@"kCVImageBufferDisplayHeightKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferDisplayHeightKey inContext: context];
	p = (void*) &kCVImageBufferColorPrimaries_ITU_R_709_2;
	if (p != NULL) context[@"kCVImageBufferColorPrimaries_ITU_R_709_2"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferColorPrimaries_ITU_R_709_2 inContext: context];
	p = (void*) &kCVImageBufferTransferFunction_ITU_R_2100_HLG;
	if (p != NULL) context[@"kCVImageBufferTransferFunction_ITU_R_2100_HLG"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunction_ITU_R_2100_HLG inContext: context];
	p = (void*) &kCVImageBufferFieldDetailKey;
	if (p != NULL) context[@"kCVImageBufferFieldDetailKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferFieldDetailKey inContext: context];
	p = (void*) &kCVImageBufferChromaSubsampling_420;
	if (p != NULL) context[@"kCVImageBufferChromaSubsampling_420"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaSubsampling_420 inContext: context];
	p = (void*) &kCVImageBufferColorPrimaries_DCI_P3;
	if (p != NULL) context[@"kCVImageBufferColorPrimaries_DCI_P3"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferColorPrimaries_DCI_P3 inContext: context];
	p = (void*) &kCVImageBufferContentLightLevelInfoKey;
	if (p != NULL) context[@"kCVImageBufferContentLightLevelInfoKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferContentLightLevelInfoKey inContext: context];
	p = (void*) &kCVImageBufferTransferFunction_ITU_R_709_2;
	if (p != NULL) context[@"kCVImageBufferTransferFunction_ITU_R_709_2"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunction_ITU_R_709_2 inContext: context];
	p = (void*) &kCVImageBufferPreferredCleanApertureKey;
	if (p != NULL) context[@"kCVImageBufferPreferredCleanApertureKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferPreferredCleanApertureKey inContext: context];
	p = (void*) &kCVImageBufferChromaSubsampling_411;
	if (p != NULL) context[@"kCVImageBufferChromaSubsampling_411"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaSubsampling_411 inContext: context];
	p = (void*) &kCVImageBufferYCbCrMatrix_ITU_R_709_2;
	if (p != NULL) context[@"kCVImageBufferYCbCrMatrix_ITU_R_709_2"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferYCbCrMatrix_ITU_R_709_2 inContext: context];
	p = (void*) &kCVImageBufferCleanApertureHeightKey;
	if (p != NULL) context[@"kCVImageBufferCleanApertureHeightKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferCleanApertureHeightKey inContext: context];
	p = (void*) &kCVImageBufferCleanApertureVerticalOffsetKey;
	if (p != NULL) context[@"kCVImageBufferCleanApertureVerticalOffsetKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferCleanApertureVerticalOffsetKey inContext: context];
	p = (void*) &kCVImageBufferChromaLocation_Left;
	if (p != NULL) context[@"kCVImageBufferChromaLocation_Left"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocation_Left inContext: context];
	p = (void*) &kCVImageBufferYCbCrMatrix_ITU_R_2020;
	if (p != NULL) context[@"kCVImageBufferYCbCrMatrix_ITU_R_2020"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferYCbCrMatrix_ITU_R_2020 inContext: context];
	p = (void*) &kCVImageBufferChromaLocation_BottomLeft;
	if (p != NULL) context[@"kCVImageBufferChromaLocation_BottomLeft"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocation_BottomLeft inContext: context];
	p = (void*) &kCVImageBufferColorPrimaries_P22;
	if (p != NULL) context[@"kCVImageBufferColorPrimaries_P22"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferColorPrimaries_P22 inContext: context];
	p = (void*) &kCVImageBufferAlphaChannelIsOpaque;
	if (p != NULL) context[@"kCVImageBufferAlphaChannelIsOpaque"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferAlphaChannelIsOpaque inContext: context];
	p = (void*) &kCVImageBufferMasteringDisplayColorVolumeKey;
	if (p != NULL) context[@"kCVImageBufferMasteringDisplayColorVolumeKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferMasteringDisplayColorVolumeKey inContext: context];
	p = (void*) &kCVImageBufferTransferFunction_SMPTE_ST_428_1;
	if (p != NULL) context[@"kCVImageBufferTransferFunction_SMPTE_ST_428_1"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunction_SMPTE_ST_428_1 inContext: context];
	p = (void*) &kCVImageBufferGammaLevelKey;
	if (p != NULL) context[@"kCVImageBufferGammaLevelKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferGammaLevelKey inContext: context];
	p = (void*) &kCVImageBufferTransferFunction_SMPTE_ST_2084_PQ;
	if (p != NULL) context[@"kCVImageBufferTransferFunction_SMPTE_ST_2084_PQ"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunction_SMPTE_ST_2084_PQ inContext: context];
	p = (void*) &kCVImageBufferChromaLocationBottomFieldKey;
	if (p != NULL) context[@"kCVImageBufferChromaLocationBottomFieldKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocationBottomFieldKey inContext: context];
	p = (void*) &kCVImageBufferICCProfileKey;
	if (p != NULL) context[@"kCVImageBufferICCProfileKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferICCProfileKey inContext: context];
	p = (void*) &kCVImageBufferCleanApertureHorizontalOffsetKey;
	if (p != NULL) context[@"kCVImageBufferCleanApertureHorizontalOffsetKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferCleanApertureHorizontalOffsetKey inContext: context];
	p = (void*) &kCVImageBufferYCbCrMatrix_ITU_R_601_4;
	if (p != NULL) context[@"kCVImageBufferYCbCrMatrix_ITU_R_601_4"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferYCbCrMatrix_ITU_R_601_4 inContext: context];
	p = (void*) &kCVImageBufferColorPrimaries_ITU_R_2020;
	if (p != NULL) context[@"kCVImageBufferColorPrimaries_ITU_R_2020"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferColorPrimaries_ITU_R_2020 inContext: context];
	p = (void*) &kCVImageBufferFieldDetailTemporalTopFirst;
	if (p != NULL) context[@"kCVImageBufferFieldDetailTemporalTopFirst"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferFieldDetailTemporalTopFirst inContext: context];
	p = (void*) &kCVImageBufferChromaLocation_TopLeft;
	if (p != NULL) context[@"kCVImageBufferChromaLocation_TopLeft"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocation_TopLeft inContext: context];
	p = (void*) &kCVImageBufferColorPrimaries_EBU_3213;
	if (p != NULL) context[@"kCVImageBufferColorPrimaries_EBU_3213"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferColorPrimaries_EBU_3213 inContext: context];
	p = (void*) &kCVImageBufferTransferFunction_sRGB;
	if (p != NULL) context[@"kCVImageBufferTransferFunction_sRGB"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferTransferFunction_sRGB inContext: context];
	p = (void*) &kCVImageBufferChromaLocation_Top;
	if (p != NULL) context[@"kCVImageBufferChromaLocation_Top"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaLocation_Top inContext: context];
	p = (void*) &kCVImageBufferPixelAspectRatioHorizontalSpacingKey;
	if (p != NULL) context[@"kCVImageBufferPixelAspectRatioHorizontalSpacingKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferPixelAspectRatioHorizontalSpacingKey inContext: context];
	p = (void*) &kCVImageBufferDisplayDimensionsKey;
	if (p != NULL) context[@"kCVImageBufferDisplayDimensionsKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferDisplayDimensionsKey inContext: context];
	p = (void*) &kCVImageBufferCleanApertureKey;
	if (p != NULL) context[@"kCVImageBufferCleanApertureKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferCleanApertureKey inContext: context];
	p = (void*) &kCVImageBufferFieldDetailTemporalBottomFirst;
	if (p != NULL) context[@"kCVImageBufferFieldDetailTemporalBottomFirst"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferFieldDetailTemporalBottomFirst inContext: context];
	p = (void*) &kCVImageBufferChromaSubsampling_422;
	if (p != NULL) context[@"kCVImageBufferChromaSubsampling_422"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaSubsampling_422 inContext: context];
	p = (void*) &kCVImageBufferChromaSubsamplingKey;
	if (p != NULL) context[@"kCVImageBufferChromaSubsamplingKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferChromaSubsamplingKey inContext: context];
	p = (void*) &kCVImageBufferFieldCountKey;
	if (p != NULL) context[@"kCVImageBufferFieldCountKey"] = [JSValue valueWithObject: (__bridge id) kCVImageBufferFieldCountKey inContext: context];
}
void load_CoreVideo_CVImageBuffer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
