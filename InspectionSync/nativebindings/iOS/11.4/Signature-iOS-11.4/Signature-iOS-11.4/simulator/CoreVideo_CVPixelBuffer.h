#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreVideo_CVPixelBuffer_symbols(JSContext*);
@interface JSValue (CoreVideo_CVPixelBuffer)
+(JSValue*) valueWithCVPlanarPixelBufferInfo_YCbCrPlanar: (CVPlanarPixelBufferInfo_YCbCrPlanar) s inContext: (JSContext*) context;
-(CVPlanarPixelBufferInfo_YCbCrPlanar) toCVPlanarPixelBufferInfo_YCbCrPlanar;
+(JSValue*) valueWithCVPlanarPixelBufferInfo_YCbCrBiPlanar: (CVPlanarPixelBufferInfo_YCbCrBiPlanar) s inContext: (JSContext*) context;
-(CVPlanarPixelBufferInfo_YCbCrBiPlanar) toCVPlanarPixelBufferInfo_YCbCrBiPlanar;
+(JSValue*) valueWithCVPlanarComponentInfo: (CVPlanarComponentInfo) s inContext: (JSContext*) context;
-(CVPlanarComponentInfo) toCVPlanarComponentInfo;
@end
#pragma clang diagnostic pop