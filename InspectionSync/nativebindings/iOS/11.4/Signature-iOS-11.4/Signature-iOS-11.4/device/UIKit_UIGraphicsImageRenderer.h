#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIGraphicsImageRenderer_symbols(JSContext*);
@protocol UIGraphicsImageRendererContextInstanceExports<JSExport>
@property (readonly,nonatomic) UIImage * currentImage;
@end
@protocol UIGraphicsImageRendererContextClassExports<JSExport>
@end
@protocol UIGraphicsImageRendererInstanceExports<JSExport>
JSExportAs(JPEGDataWithCompressionQualityActions,
-(NSData *) jsJPEGDataWithCompressionQuality: (CGFloat) compressionQuality actions: (JSValue *) actions );
JSExportAs(initWithSize,
-(id) jsinitWithSize: (CGSize) size );
JSExportAs(imageWithActions,
-(UIImage *) jsimageWithActions: (JSValue *) actions );
JSExportAs(PNGDataWithActions,
-(NSData *) jsPNGDataWithActions: (JSValue *) actions );
JSExportAs(initWithBoundsFormat,
-(id) jsinitWithBounds: (CGRect) bounds format: (UIGraphicsImageRendererFormat *) format );
JSExportAs(initWithSizeFormat,
-(id) jsinitWithSize: (CGSize) size format: (UIGraphicsImageRendererFormat *) format );
@end
@protocol UIGraphicsImageRendererClassExports<JSExport>
@end
@protocol UIGraphicsImageRendererFormatInstanceExports<JSExport>
@property (nonatomic) CGFloat scale;
@property (nonatomic) BOOL prefersExtendedRange;
@property (nonatomic) BOOL opaque;
@end
@protocol UIGraphicsImageRendererFormatClassExports<JSExport>
+(id) formatForTraitCollection: (UITraitCollection *) traitCollection ;
@end
#pragma clang diagnostic pop