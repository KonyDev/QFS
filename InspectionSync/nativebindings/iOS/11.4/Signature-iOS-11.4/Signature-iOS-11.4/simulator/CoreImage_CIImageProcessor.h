#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIImageProcessor_symbols(JSContext*);
@protocol CIImageProcessorKernelInstanceExports<JSExport>
@end
@protocol CIImageProcessorKernelClassExports<JSExport>
+(_Bool) synchronizeInputs;
+(CIFormat) outputFormat;
JSExportAs(applyWithExtentInputsArgumentsError,
+(CIImage *) jsapplyWithExtent: (CGRect) extent inputs: (NSArray *) inputs arguments: (NSDictionary *) args error: (JSValue *) error );
JSExportAs(processWithInputsArgumentsOutputError,
+(BOOL) jsprocessWithInputs: (NSArray *) inputs arguments: (NSDictionary *) arguments output: (id) output error: (JSValue *) error );
+(CIFormat) formatForInputAtIndex: (int) input ;
+(_Bool) outputIsOpaque;
+(CGRect) roiForInput: (int) input arguments: (NSDictionary *) arguments outputRect: (CGRect) outputRect ;
@end
@protocol CIImageProcessorInputInstanceExports_<JSExport>
@property (readonly,nonatomic) CIFormat format;
@property (readonly,nonatomic) CGRect region;
@property (readonly,nonatomic) id pixelBuffer;
@property (readonly,nonatomic) id metalTexture;
@property (readonly,nonatomic) size_t bytesPerRow;
@end
@protocol CIImageProcessorInputClassExports_<JSExport>
@end
@protocol CIImageProcessorOutputInstanceExports_<JSExport>
@property (readonly,nonatomic) id metalCommandBuffer;
@property (readonly,nonatomic) CIFormat format;
@property (readonly,nonatomic) CGRect region;
@property (readonly,nonatomic) id pixelBuffer;
@property (readonly,nonatomic) id metalTexture;
@property (readonly,nonatomic) size_t bytesPerRow;
@end
@protocol CIImageProcessorOutputClassExports_<JSExport>
@end
#pragma clang diagnostic pop