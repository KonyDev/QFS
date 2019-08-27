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
	context[@"MTLPixelFormatInvalid"] = @0UL;
	context[@"MTLPixelFormatA8Unorm"] = @1UL;
	context[@"MTLPixelFormatR8Unorm"] = @10UL;
	context[@"MTLPixelFormatR8Unorm_sRGB"] = @11UL;
	context[@"MTLPixelFormatR8Snorm"] = @12UL;
	context[@"MTLPixelFormatR8Uint"] = @13UL;
	context[@"MTLPixelFormatR8Sint"] = @14UL;
	context[@"MTLPixelFormatR16Unorm"] = @20UL;
	context[@"MTLPixelFormatR16Snorm"] = @22UL;
	context[@"MTLPixelFormatR16Uint"] = @23UL;
	context[@"MTLPixelFormatR16Sint"] = @24UL;
	context[@"MTLPixelFormatR16Float"] = @25UL;
	context[@"MTLPixelFormatRG8Unorm"] = @30UL;
	context[@"MTLPixelFormatRG8Unorm_sRGB"] = @31UL;
	context[@"MTLPixelFormatRG8Snorm"] = @32UL;
	context[@"MTLPixelFormatRG8Uint"] = @33UL;
	context[@"MTLPixelFormatRG8Sint"] = @34UL;
	context[@"MTLPixelFormatB5G6R5Unorm"] = @40UL;
	context[@"MTLPixelFormatA1BGR5Unorm"] = @41UL;
	context[@"MTLPixelFormatABGR4Unorm"] = @42UL;
	context[@"MTLPixelFormatBGR5A1Unorm"] = @43UL;
	context[@"MTLPixelFormatR32Uint"] = @53UL;
	context[@"MTLPixelFormatR32Sint"] = @54UL;
	context[@"MTLPixelFormatR32Float"] = @55UL;
	context[@"MTLPixelFormatRG16Unorm"] = @60UL;
	context[@"MTLPixelFormatRG16Snorm"] = @62UL;
	context[@"MTLPixelFormatRG16Uint"] = @63UL;
	context[@"MTLPixelFormatRG16Sint"] = @64UL;
	context[@"MTLPixelFormatRG16Float"] = @65UL;
	context[@"MTLPixelFormatRGBA8Unorm"] = @70UL;
	context[@"MTLPixelFormatRGBA8Unorm_sRGB"] = @71UL;
	context[@"MTLPixelFormatRGBA8Snorm"] = @72UL;
	context[@"MTLPixelFormatRGBA8Uint"] = @73UL;
	context[@"MTLPixelFormatRGBA8Sint"] = @74UL;
	context[@"MTLPixelFormatBGRA8Unorm"] = @80UL;
	context[@"MTLPixelFormatBGRA8Unorm_sRGB"] = @81UL;
	context[@"MTLPixelFormatRGB10A2Unorm"] = @90UL;
	context[@"MTLPixelFormatRGB10A2Uint"] = @91UL;
	context[@"MTLPixelFormatRG11B10Float"] = @92UL;
	context[@"MTLPixelFormatRGB9E5Float"] = @93UL;
	context[@"MTLPixelFormatBGR10A2Unorm"] = @94UL;
	context[@"MTLPixelFormatBGR10_XR"] = @554UL;
	context[@"MTLPixelFormatBGR10_XR_sRGB"] = @555UL;
	context[@"MTLPixelFormatRG32Uint"] = @103UL;
	context[@"MTLPixelFormatRG32Sint"] = @104UL;
	context[@"MTLPixelFormatRG32Float"] = @105UL;
	context[@"MTLPixelFormatRGBA16Unorm"] = @110UL;
	context[@"MTLPixelFormatRGBA16Snorm"] = @112UL;
	context[@"MTLPixelFormatRGBA16Uint"] = @113UL;
	context[@"MTLPixelFormatRGBA16Sint"] = @114UL;
	context[@"MTLPixelFormatRGBA16Float"] = @115UL;
	context[@"MTLPixelFormatBGRA10_XR"] = @552UL;
	context[@"MTLPixelFormatBGRA10_XR_sRGB"] = @553UL;
	context[@"MTLPixelFormatRGBA32Uint"] = @123UL;
	context[@"MTLPixelFormatRGBA32Sint"] = @124UL;
	context[@"MTLPixelFormatRGBA32Float"] = @125UL;
	context[@"MTLPixelFormatPVRTC_RGB_2BPP"] = @160UL;
	context[@"MTLPixelFormatPVRTC_RGB_2BPP_sRGB"] = @161UL;
	context[@"MTLPixelFormatPVRTC_RGB_4BPP"] = @162UL;
	context[@"MTLPixelFormatPVRTC_RGB_4BPP_sRGB"] = @163UL;
	context[@"MTLPixelFormatPVRTC_RGBA_2BPP"] = @164UL;
	context[@"MTLPixelFormatPVRTC_RGBA_2BPP_sRGB"] = @165UL;
	context[@"MTLPixelFormatPVRTC_RGBA_4BPP"] = @166UL;
	context[@"MTLPixelFormatPVRTC_RGBA_4BPP_sRGB"] = @167UL;
	context[@"MTLPixelFormatEAC_R11Unorm"] = @170UL;
	context[@"MTLPixelFormatEAC_R11Snorm"] = @172UL;
	context[@"MTLPixelFormatEAC_RG11Unorm"] = @174UL;
	context[@"MTLPixelFormatEAC_RG11Snorm"] = @176UL;
	context[@"MTLPixelFormatEAC_RGBA8"] = @178UL;
	context[@"MTLPixelFormatEAC_RGBA8_sRGB"] = @179UL;
	context[@"MTLPixelFormatETC2_RGB8"] = @180UL;
	context[@"MTLPixelFormatETC2_RGB8_sRGB"] = @181UL;
	context[@"MTLPixelFormatETC2_RGB8A1"] = @182UL;
	context[@"MTLPixelFormatETC2_RGB8A1_sRGB"] = @183UL;
	context[@"MTLPixelFormatASTC_4x4_sRGB"] = @186UL;
	context[@"MTLPixelFormatASTC_5x4_sRGB"] = @187UL;
	context[@"MTLPixelFormatASTC_5x5_sRGB"] = @188UL;
	context[@"MTLPixelFormatASTC_6x5_sRGB"] = @189UL;
	context[@"MTLPixelFormatASTC_6x6_sRGB"] = @190UL;
	context[@"MTLPixelFormatASTC_8x5_sRGB"] = @192UL;
	context[@"MTLPixelFormatASTC_8x6_sRGB"] = @193UL;
	context[@"MTLPixelFormatASTC_8x8_sRGB"] = @194UL;
	context[@"MTLPixelFormatASTC_10x5_sRGB"] = @195UL;
	context[@"MTLPixelFormatASTC_10x6_sRGB"] = @196UL;
	context[@"MTLPixelFormatASTC_10x8_sRGB"] = @197UL;
	context[@"MTLPixelFormatASTC_10x10_sRGB"] = @198UL;
	context[@"MTLPixelFormatASTC_12x10_sRGB"] = @199UL;
	context[@"MTLPixelFormatASTC_12x12_sRGB"] = @200UL;
	context[@"MTLPixelFormatASTC_4x4_LDR"] = @204UL;
	context[@"MTLPixelFormatASTC_5x4_LDR"] = @205UL;
	context[@"MTLPixelFormatASTC_5x5_LDR"] = @206UL;
	context[@"MTLPixelFormatASTC_6x5_LDR"] = @207UL;
	context[@"MTLPixelFormatASTC_6x6_LDR"] = @208UL;
	context[@"MTLPixelFormatASTC_8x5_LDR"] = @210UL;
	context[@"MTLPixelFormatASTC_8x6_LDR"] = @211UL;
	context[@"MTLPixelFormatASTC_8x8_LDR"] = @212UL;
	context[@"MTLPixelFormatASTC_10x5_LDR"] = @213UL;
	context[@"MTLPixelFormatASTC_10x6_LDR"] = @214UL;
	context[@"MTLPixelFormatASTC_10x8_LDR"] = @215UL;
	context[@"MTLPixelFormatASTC_10x10_LDR"] = @216UL;
	context[@"MTLPixelFormatASTC_12x10_LDR"] = @217UL;
	context[@"MTLPixelFormatASTC_12x12_LDR"] = @218UL;
	context[@"MTLPixelFormatGBGR422"] = @240UL;
	context[@"MTLPixelFormatBGRG422"] = @241UL;
	context[@"MTLPixelFormatDepth32Float"] = @252UL;
	context[@"MTLPixelFormatStencil8"] = @253UL;
	context[@"MTLPixelFormatDepth32Float_Stencil8"] = @260UL;
	context[@"MTLPixelFormatX32_Stencil8"] = @261UL;

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
