#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIImageAccumulator_symbols(JSContext*);
@protocol CIImageAccumulatorInstanceExports<JSExport>
@property (readonly) CGRect extent;
@property (readonly) CIFormat format;
JSExportAs(initWithExtentFormat,
-(id) jsinitWithExtent: (CGRect) extent format: (CIFormat) format );
-(CIImage *) image;
-(void) setImage: (CIImage *) image dirtyRect: (CGRect) dirtyRect ;
JSExportAs(initWithExtentFormatColorSpace,
-(id) jsinitWithExtent: (CGRect) extent format: (CIFormat) format colorSpace: (id) colorSpace );
-(void) clear;
-(void) setImage: (CIImage *) image ;
@end
@protocol CIImageAccumulatorClassExports<JSExport>
+(id) imageAccumulatorWithExtent: (CGRect) extent format: (CIFormat) format colorSpace: (id) colorSpace ;
+(id) imageAccumulatorWithExtent: (CGRect) extent format: (CIFormat) format ;
@end
#pragma clang diagnostic pop