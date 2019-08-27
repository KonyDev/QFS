#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CATextLayer_symbols(JSContext*);
@protocol CATextLayerInstanceExports<JSExport>
@property () id foregroundColor;
@property (copy) id string;
@property (copy) NSString * truncationMode;
@property (copy) NSString * alignmentMode;
@property () CGFloat fontSize;
@property (getter=isWrapped) BOOL wrapped;
@property () id font;
@property () BOOL allowsFontSubpixelQuantization;
@end
@protocol CATextLayerClassExports<JSExport>
@end
#pragma clang diagnostic pop