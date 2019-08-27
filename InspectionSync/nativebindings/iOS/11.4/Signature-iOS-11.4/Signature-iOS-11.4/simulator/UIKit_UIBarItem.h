#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIBarItem_symbols(JSContext*);
@protocol UIBarItemInstanceExports<JSExport, NSCodingInstanceExports_, UIAppearanceInstanceExports_>
@property (copy,nonatomic) NSString * title;
@property (nonatomic) UIEdgeInsets landscapeImagePhoneInsets;
@property (nonatomic,strong) UIImage * image;
@property (getter=isEnabled,nonatomic) BOOL enabled;
@property (nonatomic,strong) UIImage * landscapeImagePhone;
@property (nonatomic,strong) UIImage * largeContentSizeImage;
@property (nonatomic) NSInteger tag;
@property (nonatomic) UIEdgeInsets imageInsets;
@property (nonatomic) UIEdgeInsets largeContentSizeImageInsets;
-(void) setTitleTextAttributes: (NSDictionary *) attributes forState: (UIControlState) state ;
-(id) jsinit;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(NSDictionary *) titleTextAttributesForState: (UIControlState) state ;
@end
@protocol UIBarItemClassExports<JSExport, NSCodingClassExports_, UIAppearanceClassExports_>
@end
#pragma clang diagnostic pop