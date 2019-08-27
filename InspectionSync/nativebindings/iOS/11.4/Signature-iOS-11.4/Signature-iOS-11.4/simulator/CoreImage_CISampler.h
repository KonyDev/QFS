#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CISampler_symbols(JSContext*);
@protocol CISamplerInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly) CIFilterShape * definition;
@property (readonly) CGRect extent;
JSExportAs(initWithImageOptions,
-(id) jsinitWithImage: (CIImage *) im options: (NSDictionary *) dict );
JSExportAs(initWithImageKeysAndValues,
-(id) jsinitWithImage: (CIImage *) im keysAndValues: (id) key0 arguments: (NSArray *) args );
JSExportAs(initWithImage,
-(id) jsinitWithImage: (CIImage *) im );
@end
@protocol CISamplerClassExports<JSExport, NSCopyingClassExports_>
JSExportAs(samplerWithImageKeysAndValues,
+(id) jssamplerWithImage: (CIImage *) im keysAndValues: (id) key0 arguments: (NSArray *) args );
+(id) samplerWithImage: (CIImage *) im options: (NSDictionary *) dict ;
+(id) samplerWithImage: (CIImage *) im ;
@end
#pragma clang diagnostic pop