#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation JSValue (CoreVideo_CVPixelBuffer)
+(JSValue*) valueWithCVPlanarPixelBufferInfo_YCbCrPlanar: (CVPlanarPixelBufferInfo_YCbCrPlanar) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"offset": @(s.componentInfoY.offset),
		@"rowBytes": @(s.componentInfoY.rowBytes),
		@"offset": @(s.componentInfoCb.offset),
		@"rowBytes": @(s.componentInfoCb.rowBytes),
		@"offset": @(s.componentInfoCr.offset),
		@"rowBytes": @(s.componentInfoCr.rowBytes),
	} inContext: context];
}
-(CVPlanarPixelBufferInfo_YCbCrPlanar) toCVPlanarPixelBufferInfo_YCbCrPlanar {
	return (CVPlanarPixelBufferInfo_YCbCrPlanar) {
		[self[@"componentInfoY"] toCVPlanarComponentInfo],
		[self[@"componentInfoCb"] toCVPlanarComponentInfo],
		[self[@"componentInfoCr"] toCVPlanarComponentInfo],
	};
}
+(JSValue*) valueWithCVPlanarPixelBufferInfo_YCbCrBiPlanar: (CVPlanarPixelBufferInfo_YCbCrBiPlanar) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"offset": @(s.componentInfoY.offset),
		@"rowBytes": @(s.componentInfoY.rowBytes),
		@"offset": @(s.componentInfoCbCr.offset),
		@"rowBytes": @(s.componentInfoCbCr.rowBytes),
	} inContext: context];
}
-(CVPlanarPixelBufferInfo_YCbCrBiPlanar) toCVPlanarPixelBufferInfo_YCbCrBiPlanar {
	return (CVPlanarPixelBufferInfo_YCbCrBiPlanar) {
		[self[@"componentInfoY"] toCVPlanarComponentInfo],
		[self[@"componentInfoCbCr"] toCVPlanarComponentInfo],
	};
}
+(JSValue*) valueWithCVPlanarComponentInfo: (CVPlanarComponentInfo) s inContext: (JSContext*) context {
	return [JSValue valueWithObject: @{
		@"offset": @(s.offset),
		@"rowBytes": @(s.rowBytes),
	} inContext: context];
}
-(CVPlanarComponentInfo) toCVPlanarComponentInfo {
	return (CVPlanarComponentInfo) {
		(int32_t) [self[@"offset"] toInt32],
		(uint32_t) [self[@"rowBytes"] toUInt32],
	};
}
@end
static void addProtocols()
{
}
static void registerCFunctions(JSContext* context)
{
	context[@"CVPixelBufferGetPixelFormatType"] = ^OSType(id arg0) {
		return CVPixelBufferGetPixelFormatType(arg0);
	};
	context[@"CVPixelBufferGetBytesPerRowOfPlane"] = ^size_t(id arg0, size_t arg1) {
		return CVPixelBufferGetBytesPerRowOfPlane(arg0, arg1);
	};
	context[@"CVPixelBufferGetBytesPerRow"] = ^size_t(id arg0) {
		return CVPixelBufferGetBytesPerRow(arg0);
	};
	context[@"CVPixelBufferGetDataSize"] = ^size_t(id arg0) {
		return CVPixelBufferGetDataSize(arg0);
	};
	context[@"CVPixelBufferGetHeightOfPlane"] = ^size_t(id arg0, size_t arg1) {
		return CVPixelBufferGetHeightOfPlane(arg0, arg1);
	};
	context[@"CVPixelBufferIsPlanar"] = ^Boolean(id arg0) {
		return CVPixelBufferIsPlanar(arg0);
	};
	context[@"CVPixelBufferFillExtendedPixels"] = ^CVReturn(id arg0) {
		return CVPixelBufferFillExtendedPixels(arg0);
	};
	context[@"CVPixelBufferGetHeight"] = ^size_t(id arg0) {
		return CVPixelBufferGetHeight(arg0);
	};
	context[@"CVPixelBufferRelease"] = ^void(id arg0) {
		CVPixelBufferRelease(arg0);
	};
	context[@"CVPixelBufferLockBaseAddress"] = ^CVReturn(id arg0, CVPixelBufferLockFlags arg1) {
		return CVPixelBufferLockBaseAddress(arg0, arg1);
	};
	context[@"CVPixelBufferUnlockBaseAddress"] = ^CVReturn(id arg0, CVPixelBufferLockFlags arg1) {
		return CVPixelBufferUnlockBaseAddress(arg0, arg1);
	};
	context[@"CVPixelBufferRetain"] = ^id(id arg0) {
		return CVPixelBufferRetain(arg0);
	};
	context[@"CVPixelBufferGetWidth"] = ^size_t(id arg0) {
		return CVPixelBufferGetWidth(arg0);
	};
	context[@"CVPixelBufferGetPlaneCount"] = ^size_t(id arg0) {
		return CVPixelBufferGetPlaneCount(arg0);
	};
	context[@"CVPixelBufferGetTypeID"] = ^CFTypeID() {
		return CVPixelBufferGetTypeID();
	};
	context[@"CVPixelBufferGetWidthOfPlane"] = ^size_t(id arg0, size_t arg1) {
		return CVPixelBufferGetWidthOfPlane(arg0, arg1);
	};
}
static void registerEnumConstants(JSContext* context)
{
	context[@"kCVPixelFormatType_1Monochrome"] = @1U;
	context[@"kCVPixelFormatType_2Indexed"] = @2U;
	context[@"kCVPixelFormatType_4Indexed"] = @4U;
	context[@"kCVPixelFormatType_8Indexed"] = @8U;
	context[@"kCVPixelFormatType_1IndexedGray_WhiteIsZero"] = @33U;
	context[@"kCVPixelFormatType_2IndexedGray_WhiteIsZero"] = @34U;
	context[@"kCVPixelFormatType_4IndexedGray_WhiteIsZero"] = @36U;
	context[@"kCVPixelFormatType_8IndexedGray_WhiteIsZero"] = @40U;
	context[@"kCVPixelFormatType_16BE555"] = @16U;
	context[@"kCVPixelFormatType_16LE555"] = @1278555445U;
	context[@"kCVPixelFormatType_16LE5551"] = @892679473U;
	context[@"kCVPixelFormatType_16BE565"] = @1110783541U;
	context[@"kCVPixelFormatType_16LE565"] = @1278555701U;
	context[@"kCVPixelFormatType_24RGB"] = @24U;
	context[@"kCVPixelFormatType_24BGR"] = @842285639U;
	context[@"kCVPixelFormatType_32ARGB"] = @32U;
	context[@"kCVPixelFormatType_32BGRA"] = @1111970369U;
	context[@"kCVPixelFormatType_32ABGR"] = @1094862674U;
	context[@"kCVPixelFormatType_32RGBA"] = @1380401729U;
	context[@"kCVPixelFormatType_64ARGB"] = @1647719521U;
	context[@"kCVPixelFormatType_48RGB"] = @1647589490U;
	context[@"kCVPixelFormatType_32AlphaGray"] = @1647522401U;
	context[@"kCVPixelFormatType_16Gray"] = @1647392359U;
	context[@"kCVPixelFormatType_30RGB"] = @1378955371U;
	context[@"kCVPixelFormatType_422YpCbCr8"] = @846624121U;
	context[@"kCVPixelFormatType_4444YpCbCrA8"] = @1983131704U;
	context[@"kCVPixelFormatType_4444YpCbCrA8R"] = @1916022840U;
	context[@"kCVPixelFormatType_4444AYpCbCr8"] = @2033463352U;
	context[@"kCVPixelFormatType_4444AYpCbCr16"] = @2033463606U;
	context[@"kCVPixelFormatType_444YpCbCr8"] = @1983066168U;
	context[@"kCVPixelFormatType_422YpCbCr16"] = @1983000886U;
	context[@"kCVPixelFormatType_422YpCbCr10"] = @1983000880U;
	context[@"kCVPixelFormatType_444YpCbCr10"] = @1983131952U;
	context[@"kCVPixelFormatType_420YpCbCr8Planar"] = @2033463856U;
	context[@"kCVPixelFormatType_420YpCbCr8PlanarFullRange"] = @1714696752U;
	context[@"kCVPixelFormatType_422YpCbCr_4A_8BiPlanar"] = @1630697081U;
	context[@"kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange"] = @875704438U;
	context[@"kCVPixelFormatType_420YpCbCr8BiPlanarFullRange"] = @875704422U;
	context[@"kCVPixelFormatType_422YpCbCr8_yuvs"] = @2037741171U;
	context[@"kCVPixelFormatType_422YpCbCr8FullRange"] = @2037741158U;
	context[@"kCVPixelFormatType_OneComponent8"] = @1278226488U;
	context[@"kCVPixelFormatType_TwoComponent8"] = @843264056U;
	context[@"kCVPixelFormatType_30RGBLEPackedWideGamut"] = @1999843442U;
	context[@"kCVPixelFormatType_ARGB2101010LEPacked"] = @1815162994U;
	context[@"kCVPixelFormatType_OneComponent16Half"] = @1278226536U;
	context[@"kCVPixelFormatType_OneComponent32Float"] = @1278226534U;
	context[@"kCVPixelFormatType_TwoComponent16Half"] = @843264104U;
	context[@"kCVPixelFormatType_TwoComponent32Float"] = @843264102U;
	context[@"kCVPixelFormatType_64RGBAHalf"] = @1380411457U;
	context[@"kCVPixelFormatType_128RGBAFloat"] = @1380410945U;
	context[@"kCVPixelFormatType_14Bayer_GRBG"] = @1735549492U;
	context[@"kCVPixelFormatType_14Bayer_RGGB"] = @1919379252U;
	context[@"kCVPixelFormatType_14Bayer_BGGR"] = @1650943796U;
	context[@"kCVPixelFormatType_14Bayer_GBRG"] = @1734505012U;
	context[@"kCVPixelFormatType_DisparityFloat16"] = @1751411059U;
	context[@"kCVPixelFormatType_DisparityFloat32"] = @1717856627U;
	context[@"kCVPixelFormatType_DepthFloat16"] = @1751410032U;
	context[@"kCVPixelFormatType_DepthFloat32"] = @1717855600U;
	context[@"kCVPixelFormatType_420YpCbCr10BiPlanarVideoRange"] = @2016686640U;
	context[@"kCVPixelFormatType_422YpCbCr10BiPlanarVideoRange"] = @2016686642U;
	context[@"kCVPixelFormatType_444YpCbCr10BiPlanarVideoRange"] = @2016687156U;
	context[@"kCVPixelFormatType_420YpCbCr10BiPlanarFullRange"] = @2019963440U;
	context[@"kCVPixelFormatType_422YpCbCr10BiPlanarFullRange"] = @2019963442U;
	context[@"kCVPixelFormatType_444YpCbCr10BiPlanarFullRange"] = @2019963956U;

	context[@"kCVPixelBufferLock_ReadOnly"] = @1ULL;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCVPixelBufferHeightKey;
	if (p != NULL) context[@"kCVPixelBufferHeightKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferHeightKey inContext: context];
	p = (void*) &kCVPixelBufferPixelFormatTypeKey;
	if (p != NULL) context[@"kCVPixelBufferPixelFormatTypeKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferPixelFormatTypeKey inContext: context];
	p = (void*) &kCVPixelBufferExtendedPixelsBottomKey;
	if (p != NULL) context[@"kCVPixelBufferExtendedPixelsBottomKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferExtendedPixelsBottomKey inContext: context];
	p = (void*) &kCVPixelBufferOpenGLESCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferOpenGLESCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferOpenGLESCompatibilityKey inContext: context];
	p = (void*) &kCVPixelBufferIOSurfacePropertiesKey;
	if (p != NULL) context[@"kCVPixelBufferIOSurfacePropertiesKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferIOSurfacePropertiesKey inContext: context];
	p = (void*) &kCVPixelBufferMemoryAllocatorKey;
	if (p != NULL) context[@"kCVPixelBufferMemoryAllocatorKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferMemoryAllocatorKey inContext: context];
	p = (void*) &kCVPixelBufferExtendedPixelsLeftKey;
	if (p != NULL) context[@"kCVPixelBufferExtendedPixelsLeftKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferExtendedPixelsLeftKey inContext: context];
	p = (void*) &kCVPixelBufferOpenGLESTextureCacheCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferOpenGLESTextureCacheCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferOpenGLESTextureCacheCompatibilityKey inContext: context];
	p = (void*) &kCVPixelBufferMetalCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferMetalCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferMetalCompatibilityKey inContext: context];
	p = (void*) &kCVPixelBufferOpenGLCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferOpenGLCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferOpenGLCompatibilityKey inContext: context];
	p = (void*) &kCVPixelBufferCGBitmapContextCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferCGBitmapContextCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferCGBitmapContextCompatibilityKey inContext: context];
	p = (void*) &kCVPixelBufferBytesPerRowAlignmentKey;
	if (p != NULL) context[@"kCVPixelBufferBytesPerRowAlignmentKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferBytesPerRowAlignmentKey inContext: context];
	p = (void*) &kCVPixelBufferWidthKey;
	if (p != NULL) context[@"kCVPixelBufferWidthKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferWidthKey inContext: context];
	p = (void*) &kCVPixelBufferExtendedPixelsRightKey;
	if (p != NULL) context[@"kCVPixelBufferExtendedPixelsRightKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferExtendedPixelsRightKey inContext: context];
	p = (void*) &kCVPixelBufferPlaneAlignmentKey;
	if (p != NULL) context[@"kCVPixelBufferPlaneAlignmentKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferPlaneAlignmentKey inContext: context];
	p = (void*) &kCVPixelBufferCGImageCompatibilityKey;
	if (p != NULL) context[@"kCVPixelBufferCGImageCompatibilityKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferCGImageCompatibilityKey inContext: context];
	p = (void*) &kCVPixelBufferExtendedPixelsTopKey;
	if (p != NULL) context[@"kCVPixelBufferExtendedPixelsTopKey"] = [JSValue valueWithObject: (__bridge id) kCVPixelBufferExtendedPixelsTopKey inContext: context];
}
void load_CoreVideo_CVPixelBuffer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
