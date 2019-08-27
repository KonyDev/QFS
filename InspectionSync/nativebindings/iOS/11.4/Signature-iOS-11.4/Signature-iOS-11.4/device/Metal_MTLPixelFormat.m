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
}
static void registerEnumConstants(JSContext* context)
{
	context[@"MTLPixelFormatInvalid"] = @0U;
	context[@"MTLPixelFormatA8Unorm"] = @1U;
	context[@"MTLPixelFormatR8Unorm"] = @10U;
	context[@"MTLPixelFormatR8Unorm_sRGB"] = @11U;
	context[@"MTLPixelFormatR8Snorm"] = @12U;
	context[@"MTLPixelFormatR8Uint"] = @13U;
	context[@"MTLPixelFormatR8Sint"] = @14U;
	context[@"MTLPixelFormatR16Unorm"] = @20U;
	context[@"MTLPixelFormatR16Snorm"] = @22U;
	context[@"MTLPixelFormatR16Uint"] = @23U;
	context[@"MTLPixelFormatR16Sint"] = @24U;
	context[@"MTLPixelFormatR16Float"] = @25U;
	context[@"MTLPixelFormatRG8Unorm"] = @30U;
	context[@"MTLPixelFormatRG8Unorm_sRGB"] = @31U;
	context[@"MTLPixelFormatRG8Snorm"] = @32U;
	context[@"MTLPixelFormatRG8Uint"] = @33U;
	context[@"MTLPixelFormatRG8Sint"] = @34U;
	context[@"MTLPixelFormatB5G6R5Unorm"] = @40U;
	context[@"MTLPixelFormatA1BGR5Unorm"] = @41U;
	context[@"MTLPixelFormatABGR4Unorm"] = @42U;
	context[@"MTLPixelFormatBGR5A1Unorm"] = @43U;
	context[@"MTLPixelFormatR32Uint"] = @53U;
	context[@"MTLPixelFormatR32Sint"] = @54U;
	context[@"MTLPixelFormatR32Float"] = @55U;
	context[@"MTLPixelFormatRG16Unorm"] = @60U;
	context[@"MTLPixelFormatRG16Snorm"] = @62U;
	context[@"MTLPixelFormatRG16Uint"] = @63U;
	context[@"MTLPixelFormatRG16Sint"] = @64U;
	context[@"MTLPixelFormatRG16Float"] = @65U;
	context[@"MTLPixelFormatRGBA8Unorm"] = @70U;
	context[@"MTLPixelFormatRGBA8Unorm_sRGB"] = @71U;
	context[@"MTLPixelFormatRGBA8Snorm"] = @72U;
	context[@"MTLPixelFormatRGBA8Uint"] = @73U;
	context[@"MTLPixelFormatRGBA8Sint"] = @74U;
	context[@"MTLPixelFormatBGRA8Unorm"] = @80U;
	context[@"MTLPixelFormatBGRA8Unorm_sRGB"] = @81U;
	context[@"MTLPixelFormatRGB10A2Unorm"] = @90U;
	context[@"MTLPixelFormatRGB10A2Uint"] = @91U;
	context[@"MTLPixelFormatRG11B10Float"] = @92U;
	context[@"MTLPixelFormatRGB9E5Float"] = @93U;
	context[@"MTLPixelFormatBGR10A2Unorm"] = @94U;
	context[@"MTLPixelFormatBGR10_XR"] = @554U;
	context[@"MTLPixelFormatBGR10_XR_sRGB"] = @555U;
	context[@"MTLPixelFormatRG32Uint"] = @103U;
	context[@"MTLPixelFormatRG32Sint"] = @104U;
	context[@"MTLPixelFormatRG32Float"] = @105U;
	context[@"MTLPixelFormatRGBA16Unorm"] = @110U;
	context[@"MTLPixelFormatRGBA16Snorm"] = @112U;
	context[@"MTLPixelFormatRGBA16Uint"] = @113U;
	context[@"MTLPixelFormatRGBA16Sint"] = @114U;
	context[@"MTLPixelFormatRGBA16Float"] = @115U;
	context[@"MTLPixelFormatBGRA10_XR"] = @552U;
	context[@"MTLPixelFormatBGRA10_XR_sRGB"] = @553U;
	context[@"MTLPixelFormatRGBA32Uint"] = @123U;
	context[@"MTLPixelFormatRGBA32Sint"] = @124U;
	context[@"MTLPixelFormatRGBA32Float"] = @125U;
	context[@"MTLPixelFormatPVRTC_RGB_2BPP"] = @160U;
	context[@"MTLPixelFormatPVRTC_RGB_2BPP_sRGB"] = @161U;
	context[@"MTLPixelFormatPVRTC_RGB_4BPP"] = @162U;
	context[@"MTLPixelFormatPVRTC_RGB_4BPP_sRGB"] = @163U;
	context[@"MTLPixelFormatPVRTC_RGBA_2BPP"] = @164U;
	context[@"MTLPixelFormatPVRTC_RGBA_2BPP_sRGB"] = @165U;
	context[@"MTLPixelFormatPVRTC_RGBA_4BPP"] = @166U;
	context[@"MTLPixelFormatPVRTC_RGBA_4BPP_sRGB"] = @167U;
	context[@"MTLPixelFormatEAC_R11Unorm"] = @170U;
	context[@"MTLPixelFormatEAC_R11Snorm"] = @172U;
	context[@"MTLPixelFormatEAC_RG11Unorm"] = @174U;
	context[@"MTLPixelFormatEAC_RG11Snorm"] = @176U;
	context[@"MTLPixelFormatEAC_RGBA8"] = @178U;
	context[@"MTLPixelFormatEAC_RGBA8_sRGB"] = @179U;
	context[@"MTLPixelFormatETC2_RGB8"] = @180U;
	context[@"MTLPixelFormatETC2_RGB8_sRGB"] = @181U;
	context[@"MTLPixelFormatETC2_RGB8A1"] = @182U;
	context[@"MTLPixelFormatETC2_RGB8A1_sRGB"] = @183U;
	context[@"MTLPixelFormatASTC_4x4_sRGB"] = @186U;
	context[@"MTLPixelFormatASTC_5x4_sRGB"] = @187U;
	context[@"MTLPixelFormatASTC_5x5_sRGB"] = @188U;
	context[@"MTLPixelFormatASTC_6x5_sRGB"] = @189U;
	context[@"MTLPixelFormatASTC_6x6_sRGB"] = @190U;
	context[@"MTLPixelFormatASTC_8x5_sRGB"] = @192U;
	context[@"MTLPixelFormatASTC_8x6_sRGB"] = @193U;
	context[@"MTLPixelFormatASTC_8x8_sRGB"] = @194U;
	context[@"MTLPixelFormatASTC_10x5_sRGB"] = @195U;
	context[@"MTLPixelFormatASTC_10x6_sRGB"] = @196U;
	context[@"MTLPixelFormatASTC_10x8_sRGB"] = @197U;
	context[@"MTLPixelFormatASTC_10x10_sRGB"] = @198U;
	context[@"MTLPixelFormatASTC_12x10_sRGB"] = @199U;
	context[@"MTLPixelFormatASTC_12x12_sRGB"] = @200U;
	context[@"MTLPixelFormatASTC_4x4_LDR"] = @204U;
	context[@"MTLPixelFormatASTC_5x4_LDR"] = @205U;
	context[@"MTLPixelFormatASTC_5x5_LDR"] = @206U;
	context[@"MTLPixelFormatASTC_6x5_LDR"] = @207U;
	context[@"MTLPixelFormatASTC_6x6_LDR"] = @208U;
	context[@"MTLPixelFormatASTC_8x5_LDR"] = @210U;
	context[@"MTLPixelFormatASTC_8x6_LDR"] = @211U;
	context[@"MTLPixelFormatASTC_8x8_LDR"] = @212U;
	context[@"MTLPixelFormatASTC_10x5_LDR"] = @213U;
	context[@"MTLPixelFormatASTC_10x6_LDR"] = @214U;
	context[@"MTLPixelFormatASTC_10x8_LDR"] = @215U;
	context[@"MTLPixelFormatASTC_10x10_LDR"] = @216U;
	context[@"MTLPixelFormatASTC_12x10_LDR"] = @217U;
	context[@"MTLPixelFormatASTC_12x12_LDR"] = @218U;
	context[@"MTLPixelFormatGBGR422"] = @240U;
	context[@"MTLPixelFormatBGRG422"] = @241U;
	context[@"MTLPixelFormatDepth32Float"] = @252U;
	context[@"MTLPixelFormatStencil8"] = @253U;
	context[@"MTLPixelFormatDepth32Float_Stencil8"] = @260U;
	context[@"MTLPixelFormatX32_Stencil8"] = @261U;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
}
void load_Metal_MTLPixelFormat_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
