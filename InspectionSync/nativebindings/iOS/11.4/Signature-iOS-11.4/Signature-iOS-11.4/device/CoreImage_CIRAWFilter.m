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
	class_addProtocol([CIFilter class], @protocol(CIFilterCIRAWFilterCategoryInstanceExports));
	class_addProtocol([CIFilter class], @protocol(CIFilterCIRAWFilterCategoryClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCIInputMoireAmountKey;
	if (p != NULL) context[@"kCIInputMoireAmountKey"] = kCIInputMoireAmountKey;
	p = (void*) &kCIInputLuminanceNoiseReductionAmountKey;
	if (p != NULL) context[@"kCIInputLuminanceNoiseReductionAmountKey"] = kCIInputLuminanceNoiseReductionAmountKey;
	p = (void*) &kCIInputNeutralChromaticityXKey;
	if (p != NULL) context[@"kCIInputNeutralChromaticityXKey"] = kCIInputNeutralChromaticityXKey;
	p = (void*) &kCIInputDecoderVersionKey;
	if (p != NULL) context[@"kCIInputDecoderVersionKey"] = kCIInputDecoderVersionKey;
	p = (void*) &kCIInputColorNoiseReductionAmountKey;
	if (p != NULL) context[@"kCIInputColorNoiseReductionAmountKey"] = kCIInputColorNoiseReductionAmountKey;
	p = (void*) &kCIInputScaleFactorKey;
	if (p != NULL) context[@"kCIInputScaleFactorKey"] = kCIInputScaleFactorKey;
	p = (void*) &kCIInputEnableChromaticNoiseTrackingKey;
	if (p != NULL) context[@"kCIInputEnableChromaticNoiseTrackingKey"] = kCIInputEnableChromaticNoiseTrackingKey;
	p = (void*) &kCIInputAllowDraftModeKey;
	if (p != NULL) context[@"kCIInputAllowDraftModeKey"] = kCIInputAllowDraftModeKey;
	p = (void*) &kCIInputIgnoreImageOrientationKey;
	if (p != NULL) context[@"kCIInputIgnoreImageOrientationKey"] = kCIInputIgnoreImageOrientationKey;
	p = (void*) &kCIInputBoostShadowAmountKey;
	if (p != NULL) context[@"kCIInputBoostShadowAmountKey"] = kCIInputBoostShadowAmountKey;
	p = (void*) &kCIInputBoostKey;
	if (p != NULL) context[@"kCIInputBoostKey"] = kCIInputBoostKey;
	p = (void*) &kCIInputNeutralTemperatureKey;
	if (p != NULL) context[@"kCIInputNeutralTemperatureKey"] = kCIInputNeutralTemperatureKey;
	p = (void*) &kCIInputImageOrientationKey;
	if (p != NULL) context[@"kCIInputImageOrientationKey"] = kCIInputImageOrientationKey;
	p = (void*) &kCISupportedDecoderVersionsKey;
	if (p != NULL) context[@"kCISupportedDecoderVersionsKey"] = kCISupportedDecoderVersionsKey;
	p = (void*) &kCIInputLinearSpaceFilter;
	if (p != NULL) context[@"kCIInputLinearSpaceFilter"] = kCIInputLinearSpaceFilter;
	p = (void*) &kCIInputDisableGamutMapKey;
	if (p != NULL) context[@"kCIInputDisableGamutMapKey"] = kCIInputDisableGamutMapKey;
	p = (void*) &kCIInputNeutralTintKey;
	if (p != NULL) context[@"kCIInputNeutralTintKey"] = kCIInputNeutralTintKey;
	p = (void*) &kCIInputBaselineExposureKey;
	if (p != NULL) context[@"kCIInputBaselineExposureKey"] = kCIInputBaselineExposureKey;
	p = (void*) &kCIInputEnableSharpeningKey;
	if (p != NULL) context[@"kCIInputEnableSharpeningKey"] = kCIInputEnableSharpeningKey;
	p = (void*) &kCIInputNoiseReductionContrastAmountKey;
	if (p != NULL) context[@"kCIInputNoiseReductionContrastAmountKey"] = kCIInputNoiseReductionContrastAmountKey;
	p = (void*) &kCIInputNoiseReductionDetailAmountKey;
	if (p != NULL) context[@"kCIInputNoiseReductionDetailAmountKey"] = kCIInputNoiseReductionDetailAmountKey;
	p = (void*) &kCIInputNoiseReductionSharpnessAmountKey;
	if (p != NULL) context[@"kCIInputNoiseReductionSharpnessAmountKey"] = kCIInputNoiseReductionSharpnessAmountKey;
	p = (void*) &kCIInputNeutralLocationKey;
	if (p != NULL) context[@"kCIInputNeutralLocationKey"] = kCIInputNeutralLocationKey;
	p = (void*) &kCIInputNoiseReductionAmountKey;
	if (p != NULL) context[@"kCIInputNoiseReductionAmountKey"] = kCIInputNoiseReductionAmountKey;
	p = (void*) &kCIActiveKeys;
	if (p != NULL) context[@"kCIActiveKeys"] = kCIActiveKeys;
	p = (void*) &kCIOutputNativeSizeKey;
	if (p != NULL) context[@"kCIOutputNativeSizeKey"] = kCIOutputNativeSizeKey;
	p = (void*) &kCIInputNeutralChromaticityYKey;
	if (p != NULL) context[@"kCIInputNeutralChromaticityYKey"] = kCIInputNeutralChromaticityYKey;
	p = (void*) &kCIInputEnableVendorLensCorrectionKey;
	if (p != NULL) context[@"kCIInputEnableVendorLensCorrectionKey"] = kCIInputEnableVendorLensCorrectionKey;
}
void load_CoreImage_CIRAWFilter_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
