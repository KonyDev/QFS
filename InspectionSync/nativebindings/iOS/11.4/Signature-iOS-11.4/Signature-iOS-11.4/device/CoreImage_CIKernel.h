#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIKernel_symbols(JSContext*);
@protocol CIWarpKernelInstanceExports<JSExport>
JSExportAs(applyWithExtentRoiCallbackInputImageArguments,
-(CIImage *) jsapplyWithExtent: (CGRect) extent roiCallback: (JSValue *) callback inputImage: (CIImage *) image arguments: (NSArray *) args );
@end
@protocol CIWarpKernelClassExports<JSExport>
+(id) kernelWithString: (NSString *) string ;
@end
@protocol CIColorKernelInstanceExports<JSExport>
-(CIImage *) applyWithExtent: (CGRect) extent arguments: (NSArray *) args ;
@end
@protocol CIColorKernelClassExports<JSExport>
+(id) kernelWithString: (NSString *) string ;
@end
@protocol CIKernelInstanceExports<JSExport>
@property (readonly,atomic) NSString * name;
JSExportAs(applyWithExtentRoiCallbackArguments,
-(CIImage *) jsapplyWithExtent: (CGRect) extent roiCallback: (JSValue *) callback arguments: (NSArray *) args );
JSExportAs(setROISelector,
-(void) jssetROISelector: (NSString *) method );
@end
@protocol CIKernelClassExports<JSExport>
+(id) kernelWithString: (NSString *) string ;
JSExportAs(kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError,
+(id) jskernelWithFunctionName: (NSString *) name fromMetalLibraryData: (NSData *) data outputPixelFormat: (CIFormat) format error: (JSValue *) error );
JSExportAs(kernelWithFunctionNameFromMetalLibraryDataError,
+(id) jskernelWithFunctionName: (NSString *) name fromMetalLibraryData: (NSData *) data error: (JSValue *) error );
+(NSArray *) kernelsWithString: (NSString *) string ;
@end
@protocol CIBlendKernelBuiltInCategoryInstanceExports<JSExport>
@end
@protocol CIBlendKernelBuiltInCategoryClassExports<JSExport>
+(CIBlendKernel *) destinationAtop;
+(CIBlendKernel *) divide;
+(CIBlendKernel *) destinationOver;
+(CIBlendKernel *) color;
+(CIBlendKernel *) pinLight;
+(CIBlendKernel *) saturation;
+(CIBlendKernel *) multiply;
+(CIBlendKernel *) colorBurn;
+(CIBlendKernel *) sourceOut;
+(CIBlendKernel *) darkerColor;
+(CIBlendKernel *) difference;
+(CIBlendKernel *) hardMix;
+(CIBlendKernel *) exclusion;
+(CIBlendKernel *) vividLight;
+(CIBlendKernel *) overlay;
+(CIBlendKernel *) lighterColor;
+(CIBlendKernel *) destination;
+(CIBlendKernel *) componentMin;
+(CIBlendKernel *) source;
+(CIBlendKernel *) componentMultiply;
+(CIBlendKernel *) hardLight;
+(CIBlendKernel *) linearLight;
+(CIBlendKernel *) exclusiveOr;
+(CIBlendKernel *) screen;
+(CIBlendKernel *) componentMax;
+(CIBlendKernel *) componentAdd;
+(CIBlendKernel *) lighten;
+(CIBlendKernel *) softLight;
+(CIBlendKernel *) linearBurn;
+(CIBlendKernel *) sourceAtop;
+(CIBlendKernel *) destinationOut;
+(CIBlendKernel *) linearDodge;
+(CIBlendKernel *) destinationIn;
+(CIBlendKernel *) sourceOver;
+(CIBlendKernel *) subtract;
+(CIBlendKernel *) colorDodge;
+(CIBlendKernel *) sourceIn;
+(CIBlendKernel *) darken;
+(CIBlendKernel *) luminosity;
+(CIBlendKernel *) clear;
+(CIBlendKernel *) hue;
@end
@protocol CIBlendKernelInstanceExports<JSExport>
-(CIImage *) applyWithForeground: (CIImage *) foreground background: (CIImage *) background ;
@end
@protocol CIBlendKernelClassExports<JSExport>
+(id) kernelWithString: (NSString *) string ;
@end
#pragma clang diagnostic pop